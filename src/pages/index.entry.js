import TripPage from './index.vue';
import {Interface, extend, clone, mixin} from 'static/js/util.js';
import {XhrManager} from 'static/js/ajax.js';
import {asyncRequest} from 'static/js/queue.js'
import {CompositeForm} from 'static/js/composite.js'



asyncRequest('GET', 'http://bbs.qyer.com/index.php?action=getInterPerson').then((d) => {
  console.log(d)
})

const AdCommand = new Interface('AdCommand', ['execute']);
const stopAd = function (adObj) {
  this.ad = adObj;
}

function Author(name, books) {
  Author.super.constructor.call(this, name);
  this.books = books;
}

function Person(name) {
  this.name = name;
}

Person.prototype.eat = function (){
  console.log(`${this.name} eat`);
}

extend(Author, Person);

var a = new Author('zs', ['aaa', 'bbb']);



let a1 = {
  name: 'ww',
  eat () {
    console.log(`${this.name} eat`);
  }
}

let b = {
  jump () {
    console.log(`${this.name} jump`);
  }
}

let c = {
  name: 'zs'
}

function test1({name, age}) {
  console.log(`name: ${name}, age: ${age}`);
}

const abc = {
  name: 'dddd',
  age: 14
}

const s = '𠮷a';

console.log(s.length, s.charAt(0), s.charAt(1), s.charCodeAt(0), s.charCodeAt(1), s.codePointAt(0), s.codePointAt(1))

//codePointAt 参数仍然是不正确的，字符a在s中的位置序号应该是1， 但是必须向charCodeAt方法传入2.
//for of 可以解决此问题

for (let ch of s) {
  console.log(ch.codePointAt(0).toString(16))
}

//codePointAt 方法是测试一个字符由2个字节还是由4个字节组成的最简单方法。

function is32Bit(c) {
  return c.codePointAt(0) > 0xffff;
}

console.log(is32Bit(s), is32Bit('a'));







document.addEventListener('DOMContentLoaded', () => {
	//引入公共组件
	//Vue.component('crm-nav', 	require('./../components/nav/nav.vue'));
	new Vue({
		el: '#js_container',
		components: {
			TripPage
		}
	})
}, false);
