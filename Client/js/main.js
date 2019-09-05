if (module.hot) {
  module.hot.accept();
}

import DynamicLoadjQuery from "./DynamicLoadjQuery.js";

function switchColor(color) {

  DynamicLoadjQuery(render);
  function render () {
    $('h1').css('color', color)
  } 

}

document.querySelector("#switchColor").addEventListener('click', function () {
  var colors = ["blue", "green", "red"]; 
  switchColor(colors[Math.floor(Math.random() * 3)])
})