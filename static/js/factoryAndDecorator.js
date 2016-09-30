import Interface from './interface.js';

const BicycleInterface = new Interface('BicycleInterface', ['assemble', 'wash', 'ride', 'repair', 'getPrice']);

const bicycleModel = {
  speedster: Symbol('The Speedster'),
  lowrider: Symbol('The Lowrider'),
  flatlander: Symbol('The Flatlander'),
  comfort: Symbol('The Comfort Cruiser')
};


class Bicycle {
  constructor() {
    if (new.target === Bicycle) {
      throw new Error(`class Bicycle is an abstract class`);
    }
  }
  assemble() {
    return this;
  }
  wash() {
    console.log(this.name + ' wash');
    return this;
  }
  ride() {
    return this;
  }
  repair() {
    return this;
  }
  getPrice() {
    return this;
  }
}


class BicycleShop {
  constructor() {
    if (new.target === BicycleShop) {
      throw new Error(`class BicycleShop is an abstract class`);
    }
  }
  sellBicycle(model) {
    return this.createBicycle(model).assemble().wash();
  }
  createBicycle(model) {
    throw new Error('Unsupported operation on an abstract class.');
  }
  get model () {
    return bicycleModel;
  }
}

class AcmeBicycleShop extends BicycleShop{

  createBicycle(model) {
    let bicycle = null;
    switch(model) {
      case bicycleModel.speedster:
        bicycle = new AcmeSpeedster();
        break;
      case bicycleModel.lowrider:
        bicycle = new AcmeLowrider();
        break;
      case bicycleModel.flatlander:
        bicycle = new AcmeFlatlander();
        break;
      case bicycleModel.comfort:
      default:
        bicycle = new AcmeComfortCruiser();
    }

    Interface.ensureImplements(bicycle, BicycleInterface);
    return bicycle;
  }
}


class AcmeSpeedster extends Bicycle {
  get name() {
    return 'AcmeSpeedster';
  }
  getPrice() {
    return 599;
  }
}
class AcmeLowrider extends Bicycle {
  get name() {
    return 'AcmeLowrider ';
  }
  getPrice() {
    return 299;
  }
}

class  AcmeFlatlander extends Bicycle {
  get name() {
    return 'AcmeFlatlander ';
  }
  getPrice() {
    return 399;
  }
}
class AcmeComfortCruiser extends Bicycle {
  get name() {
    return 'AcmeComfortCruiser';
  }
  getPrice() {
    return 399;
  }
}

class BicycleDecorator {
  constructor(bicycle) {
    Interface.ensureImplements(bicycle, BicycleInterface);
    if (new.target === BicycleDecorator) {
      throw new Error('abstract class BicycleDecorator ');
    }
    this.bicycle = bicycle;
    this.interface = BicycleInterface;
    outerloop: for(var key in this.bicycle) {
      let i = 0;
      console.log(key, 'key')
      let len = this.interface.methods.length;
      if (typeof this.bicycle[key] !== 'function') continue outerloop;
      for (; i < len; i++) {
        if (key === this.interface.methods[i]) continue outerloop;
      }
      (methodName => {
        console.log(this)
        this[methodName] = () => this.bicycle[methodName]()
        console.log('this: ', this)
      })(key);
    }
  }
  assemble() {
    return this.bicycle.assemble();
  }
  wash() {
    return this.bicycle.wash();
  }
  ride() {
    return this.bicycle.ride();
  }
  repair(){
    return this.bicycle.repair();
  }
  getPrice() {
    return this.bicycle.getPrice();
  }
}

class HeadlightDecorator extends BicycleDecorator {
  constructor(bicycle) {
    super(bicycle);
  }
  assemble() {
    console.log(this.bicycle.assemble() + 'attach headlight to handlebars');
    return this;
  }
  getPrice() {
    return this.bicycle.getPrice() + 200
  }
}

class TaillightDecorator extends BicycleDecorator {
  constructor(bicycle) {
    super(bicycle);
  }
  assemble() {
    console.log(this.bicycle.assemble() + 'attach taillight to handlebars');
    return this;
  }
  getPrice() {
    return this.bicycle.getPrice() + 100
  }
  ringBell() {
    console.log('ringbell');
  }

}








export {AcmeBicycleShop, HeadlightDecorator, TaillightDecorator};

