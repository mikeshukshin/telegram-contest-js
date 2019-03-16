import { Grapher } from './main';

(function(){
  document.addEventListener("DOMContentLoaded", ready);
  
  let contentElem,
    graphElem,
    grapher;
  
  function ready() {
  
    addListeners(data => {
      toggleControls();
      grapher = new Grapher(data);
    });
    attachElem();
  }
  
  function addListeners(cb) {
    const inputElem = document.getElementById('fileElem');
    inputElem.addEventListener('change', onChange.bind(this, cb))
  }
  
  function onChange(cb, event) {
    var reader = new FileReader();
    reader.onload = event => cb(JSON.parse(event.target.result));
    reader.readAsText(event.target.files[0]);
  }

  function attachElem(){
    contentElem = document.querySelector('.content');
    graphElem = document.querySelector('.graph');
  }
  
  function toggleControls() {
    contentElem.classList.toggle('hidden');
    graphElem.classList.toggle('hidden');
  }
})()