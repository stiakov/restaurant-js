import DOM from './js/dom_manager.js';

const dom = new DOM();
dom.log();
const test = dom.create('h1');
test.innerHTML = 'hola';
const body = document.getElementById('container');
body.appendChild(test);
