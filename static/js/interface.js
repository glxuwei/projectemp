class Interface {
  constructor(name, methods) {
    this.name = name;
    this.methods = methods;
  }
  static ensureImplements (obj, ...interfaces) {
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
}

export default Interface;


/* export function Interface (...args) { */
  // if (args.length !== 2) {
    // throw new error(`interface constructor called with ${args.length} arguments, but expected exactly 2.`);
  // }
  // this.name = args[0];
  // this.methods = [];
  // args[1].forEach(item => {
    // if (typeof item !== 'string') {
      // throw new Error('Interface constructor expects method names to be passed in as a string');
    // }
    // this.methods.push(item);
  // })
/* } */

