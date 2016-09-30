let getXHR = () => {
  let http = null;
  try {
    http = new XMLHttpRequest;
    getXHR = () => http;
  }
  catch(e) {
    const msxml = [
      'MSXML2.XMLHTTP.3.0',
      'MSXML2.XMLHTTP',
      'Microsoft.XMLHTTP'
    ];
    msxml.forEach(item => {
      try{
        http = new ActiveXObject(item);
        getXHR = () => http;
        return;
      }catch(e) {}
    });
  }
  return http;
}
const asyncRequest = (method = 'GET', uri, postData = null) => {
  // return () => {
  return new Promise(resolve => {
    const http = getXHR();
    http.open(method, uri, true);
    const poll = setInterval(() => {
      if (http.readyState === 4) {
        clearInterval(poll);
        resolve(http);
      }
    }, 50)
    http.send(postData);
  })
  // }
};
export {getXHR, asyncRequest};
