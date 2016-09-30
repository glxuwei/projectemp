'use strict'
/* --------------------------------------------------------------------------*/
/**
 *@synopsis 模拟接口类
* @class Interface
* @constructor
*
  * @Param {String} name 接口名
  * @Param {Array} methods 接口方法集合
  *
    * @returns
    */
    /* --------------------------------------------------------------------------*/
export function Interface (...args) {
  if (args.length !== 2) {
    throw new error(`interface constructor called with ${args.length} arguments, but expected exactly 2.`);
  }
  this.name = args[0];
  this.methods = [];
  args[1].forEach(item => {
    if (typeof item !== 'string') {
      throw new Error('Interface constructor expects method names to be passed in as a string');
    }
    this.methods.push(item);
  })
}

/* --------------------------------------------------------------------------*/
/**
* @synopsis 确保对象实现了每个接口的方法
* @method ensureImplements
* @for Interface
* @Param {Object} obj 需要实现接口的对象
* @Param {Interface}  接口实例集合
* @returns
*/
/* --------------------------------------------------------------------------*/
Interface.ensureImplements = function (obj, ...interfaces) {
  const iLen = interfaces.length;
  if (iLen < 1) {
    throw new Error(`Function Interface.ensureImplements called with ${iLen + 1} arguments, but expected at least 2.`);
  }
  interfaces.forEach(item => {
    if (item.constructor !== Interface) {
      throw new Error('Function Interface.ensureImplements expects arguments two and above to be instances of Interface.');
    }
    item.methods.forEach(method => {
      if (!obj[method] || typeof obj[method] !== 'function') {
        throw new Error(`Function interface.ensureImplements: object does not implement the ${item.name} interface. Method ${method} was not found.`);
      }
    });
  })
}

/* --------------------------------------------------------------------------*/
/**
  * @synopsis 类式继承方法
  * @method extend
  * @Param {Class} subClass  子类
  * @Param {Class} supClass  父类
  *
  * @return
  */
/* --------------------------------------------------------------------------*/
export const extend = (subClass, supClass) => {
  function F() {}
  F.prototype = supClass.prototype;
  subClass.prototype = new F;
  subClass.prototype.constructor = subClass;
  subClass.super = supClass.prototype;
  if (supClass.prototype.constructor === Object.prototype.constructor) {
    supClass.prototype.constructor = supClass;
  }
}

/* --------------------------------------------------------------------------*/
/**
* 原型式继承
* @method clone
*
  * @Param {Object} obj 被继承的对象
  *
    * @Returns {Object} 继承后的对象
    */
    /* --------------------------------------------------------------------------*/
export const clone = (obj) => {
  function F() {}
  F.prototype = obj;
  return new F;
}

/* --------------------------------------------------------------------------*/
/**
* @Synopsis 复制对象属性到第一个对象
* @method mixin
  * @Param {Object} obj 目标对象
  * @Param {Object} 提供属性的对象
  *
    * @Returns {Object} 复制后的对象
    */
    /* --------------------------------------------------------------------------*/
export const mixin = (obj, ...mix) => {
  if (!mix.length) {
    return obj;
  }
  mix.forEach(item => {
    const keys = Object.keys(item);
    keys.forEach(key => {
      if (!obj[key]) {
        obj[key] = item[key];
      }
    })
  });
  return obj;
}

/* --------------------------------------------------------------------------*/
/**
* 掺元类
*
  * @Param {Class} receivingClass 目标类
  * @Param  {Class} givingClass 提供复制属性的类
  * @Param {String} 复制givingClass 的该属性
  *
    * @Returns
    */
    /* --------------------------------------------------------------------------*/
export const augment = (receivingClass, givingClass, ...properties) => {
  if (properties.length) {
    properties.forEach(property => {
      receivingClass.prototype[property] = givingClass.prototype[property];
    });
  } else {
    for (methodName in givingClass.prototype) {
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}

const Observe = function () {
  this.fns = [];
}
Observe.prototype = {
  constructor: Observe,
  subscribe (fn) {
    this.fns.push(fn);
  },
  unsubscribe (fn) {
    this.fns = this.fns.filter(item => item !== fn);
  },
  fire (o) {
    this.fns.forEach(fn => fn.call(this, o));
  }
}











