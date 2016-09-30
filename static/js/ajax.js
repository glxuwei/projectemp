import {Interface, extend} from './util';

const AjaxHandler = new Interface('AjaxHandler', ['request', 'createXhrObject']);

function SimpleHandler() {};
SimpleHandler.prototype = {
  request (method, callback, postVars) {
    const xhr = this.createXhrObject();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      xhr.status === 200 ? callback.success(xhr.responseText, xhr.responseXML) : callback.failure(xhr.status);
    };
    xhr.open(method, url, true);
    if (method !== 'POST') postVars = null;
    xhr.send(postVars);
  },
  createXhrObject () {
    const methods = [
      function () {return new XMLHttpRequest()},
      function () {return new ActiveXObject('Msxml2.XMLHTTP')},
      function () {return new ActiveXObject('Microsoft.XMLHTTP')}
    ];

    for(let i = 0, len = methods.length; i < len; i++) {
      try {
        methods[i]();
      } catch(e) {
        continue;
      }
      this.createXhrObject = methods[i];
      return methods[i];
    }
    throw new Error('SimpleHandler: could not create an XHR object');
  }
}

function QueueHandler () {
  this.queue = [];
  this.requestInProgress = false;
  this.retryDelay = 5; //In seconds
};
extend(QueueHandler, SimpleHandler);

QueueHandler.prototype.request = function (method, url, callback, postVars, override) {

  if (this.requestInProgress && !override) {
    this.queue.push({
      method,
      url,
      callback,
      postVars
    })
  } else {
    this.requestInProgress = true;
    const xhr = this.createXhrObject();
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        callback.success(xhr.responseText, xhr.responseXML);
        this.advanceQueue();
      } else {
        callback.failure(xhr.status);
        setTimeout(() => {
          this.request(method, url, callback, postVars, true);
        }, this.retryDelay * 1000);
      }
    };
    xhr.open(method, url, true);
    if (method !== 'POST') postVars = null;
    xhr.send(postVars);
  }
}

QueueHandler.prototype.advanceQueue = function () {
  if (this.queue.length === 0) {
    this.requestInProgress = false;
    return;
  }
  const req = this.queue.shift();
  this.request(req.method, req.url, req.callback, req.postVars, true);
};

function OfflineHandler () {
  this.storedRequests = [];
};
extend(OfflineHandler, SimpleHandler);
OfflineHandler.prototype.request = function (method, url, callback, postVars) {
  if (XhrManager.isOffline()) {
    this.storedRequests.push({
      method,
      url,
      callback,
      postVars
    });
  } else {
    this.flushStoreRequests();
    OfflineHandler.supClass.request(method, url, callback, postVars);
  }
};
OfflineHandler.prototype.flushStoreRequests = function () {
  this.storedRequests.forEach(req => {
    OfflineHandler.supClass.request(req.method, req.url, req.callback, req.postVars);
  })
}

const XhrManager = {

  createXhrhandler () {
    let xhr = null;
    if (this.isOffline()) {
      xhr = new OfflineHandler();
    } else if (this.isHighLatency()) {
      xhr = new QueueHandler();
    } else {
      xhr = new SimpleHandler();
    }
    Interface.ensureImplements(xhr, AjaxHandler);
    return xhr;
  },
  isOffline () {
    return Math.round(Math.random());
  },
  isHighLatency () {
    return Math.round(Math.random());
  }
}

export {XhrManager};





