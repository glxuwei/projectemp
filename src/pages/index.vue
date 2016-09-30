<!-- 图片社区首页 -->
<style lang="less">
</style>
<template>
  <div id="d1">
    /* <div @click='save'>save</div> */
    /* <div @click='clear'>clear</div> */
    /* <div @click='restore'>restore</div> */
    <a target="_blank" href="http://bbs.qyer.com" class="test">click</a>
  </div>
</template>
  </div>
</template>
  </div>
</template>
<script>
import {CompositeForm, InputField, TextareaField, SelectField} from 'static/js/composite.js';
import {stopEvent} from 'static/js/stopEvent'
import {AcmeBicycleShop, HeadlightDecorator, TaillightDecorator} from 'static/js/factoryAndDecorator'

const as = new AcmeBicycleShop;
let b1 = as.sellBicycle(as.model.speedster);
console.log(b1.getPrice(), b1,  'before headlightdecorator');
b1 = new HeadlightDecorator(b1);
console.log(b1.getPrice(), b1, 'after headlightdecorator')
b1 = new TaillightDecorator(b1);
b1.assemble()
console.log(b1.getPrice(), b1, 'after taillightdecorator')
b1.ringBell()
b1 = new HeadlightDecorator(b1);
b1.ringBell()

const contactForm = new CompositeForm('contact-form', 'POST', 'contact.php');
export default Vue.extend({
    ready(){
      /* contactForm.add(new InputField('first-name', 'First Name')) */
      /* .add(new InputField('last-name', 'Last Name')) */
      /* .add(new InputField('address', 'Address')) */
      /* .add(new InputField('city', 'City')) */
      /* .add(new SelectField('state', 'State')) */
      /* .add(new TextareaField('comments', 'Comments')); */
      /* document.querySelector('#d1').appendChild(contactForm.getElement()) */
      document.querySelector('.test').addEventListener('click', e => {
        console.log(e, 'eee');
        stopEvent(e);
      }, true);
      document.querySelector('#d1').addEventListener('click', e => {
        console.log('bubble')
      }, false);
    },

    data(){
        return {
          tagid: 1
        }
    },

    methods:{
        changeTab(){

        },
        save() {
          contactForm.save();
        },
        clear() {
          contactForm.clear();
        },
        restore() {
          contactForm.restore();
        }
    },

    computed:{},


    filters:{},

    events:{},

    watch:{}

});




/* function ab(name) { */
  /* this.name = name; */
/* } */
/* ab.prototype.sing = function () { */
  /* console.log('singsingisng'); */
/* } */

/* function ef(name, age) { */
  /* ab.call(this, name); */
  /* this.age = age; */
/* } */
/* ef.prototype = Object.create(ab.prototype); */
/* ef.prototype.constructor = ef; */

/* var ddd = new ef('zs', 12); */

/* for (var key in ddd) { */
  /* console.log(key, 'keykey', ddd[key], ddd) */
/* } */







class abcd {
  constructor(name) {
    this.name = name;
  }
  sing() {
    console.log('sing')
  }
}

class efg extends abcd {
  constructor(name ,age) {
    super(name);
    this.age = age;
    for (let i in this) {
      console.log(i, 'iiiiii')
    }
  }

  test() {
    for (let i in this) {
      console.log(i, 'test')
    }
  }
}

const a = new efg('zs', 12)


function dada() {

}

function db() {

}

db.prototype = new dada;
db.prototype.constructor = db;
var ddd = new db;
console.log(db.__proto__ === Function.prototype, 'abcdefg')
console.log(db.prototype.__proto__ === dada.prototype, 'dldldld')
console.log(ddd.__proto__.__proto__ === dada.prototype, 'lslslsl');



</script>
