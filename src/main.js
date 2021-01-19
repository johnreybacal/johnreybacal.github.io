import { createApp } from 'vue'
import App from './App.vue'
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'

const app = createApp(App);

app.mount('#app');

// const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

// window.addEventListener('click', (ev) => {
//   const elm = ev.target;
//   if (triggers.includes(elm)) {
//     const selector = elm.getAttribute('data-target');
//     collapse(selector, 'toggle');
//   }
// }, false);


// const fnmap = {
//   'toggle': 'toggle',
//   'show': 'add',
//   'hide': 'remove'
// };
// const collapse = (selector, cmd) => {
//   const targets = Array.from(document.querySelectorAll(selector));
//   targets.forEach(target => {
//     target.classList[fnmap[cmd]]('show');
//   });
// }