import {Interface} from 'static/js/util';

const Composite = new Interface('Composite', ['add', 'remove', 'getChild', 'getElement']);
const FormItem = new Interface('FormItem', ['save', 'restore', 'clear']);

class CompositeForm {
  constructor(id, method = 'POST', action = '#') {
      this.formComponents = [];
      this.element = document.createElement('form');
      this.element.id = id;
      this.element.method = method;
      this.element.action = action;
  }
  add(child) {
    Interface.ensureImplements(child, Composite, FormItem);
    this.formComponents.push(child);
    this.element.appendChild(child.getElement());
    return this;
  }
  remove(child) {
    this.formComponents = this.formComponents.filter(item => item !== child);
    return this;
  }
  getChild(i) {
    return this.formComponents[i];
  }
  save() {
    this.formComponents.forEach(item => item.save());
  }
  restore() {
    this.formComponents.forEach(item => item.restore());
  }
  clear() {
    this.formComponents.forEach(item => item.clear());
  }
  getElement() {
    return this.element;
  }
}

class Field {
  constructor(id) {
    this.id = id;
    this.element = null;
  }
  add() {}
  restore() {
    this.setValue(window.localStorage.getItem(this.id));
  }
  clear() {

  }
  remove() {}
  getChild() {}
  save() {
    window.localStorage.setItem(this.id, this.getValue());
  }
  getElement() {
    return this.element;
  }
  getValue() {
    throw new Error('Unsupported operation on the class Field.');
  }
  setValue() {

  }
}

class InputField extends Field {
  constructor(id, label) {
    super(id);
    this.input = document.createElement('input');
    this.input.id = id;
    this.label = document.createElement('label');
    this.label.appendChild(document.createTextNode(label));
    this.element = document.createElement('div');
    this.element.className = 'input-field';
    this.element.appendChild(this.label);
    this.element.appendChild(this.input);
  }
  getValue() {
    return this.input.value;
  }
  setValue(value) {
    this.input.value = value;
  }
  clear() {
    this.input.value = '';
  }
}
class TextareaField extends Field {
  constructor(id, label) {
    super(id);
    this.textarea = document.createElement('textarea');
    this.textarea.id = id;
    this.label = document.createElement('label');
    this.label.appendChild(document.createTextNode(label));
    this.element = document.createElement('div');
    this.element.className = 'input-field';
    this.element.appendChild(this.label);
    this.element.appendChild(this.textarea);
  }
  getValue() {
    return this.textarea.value;
  }
  setValue(value) {
    this.textarea.value = value;
  }
  clear() {
    this.textarea.value = ''
  }
}

class SelectField extends Field {
  constructor(id, label) {
    super(id);
    this.select = document.createElement('select');
    this.select.id = id;
    this.label = document.createElement('label');
    this.label.appendChild(document.createTextNode(label));
    this.element = document.createElement('div');
    this.element.className = 'input-field';
    this.element.appendChild(this.label);
    this.element.appendChild(this.select);
  }
  getValue() {
    return this.select.options[this.select.selectedIndex].value;
  }
}

export {CompositeForm, InputField, TextareaField, SelectField};


