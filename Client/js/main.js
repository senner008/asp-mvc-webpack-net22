if (module.hot) {
  module.hot.accept();
}

import('../bootstrap/dist/css/bootstrap.css').then(res => {
  import('../css/styles.css')
});
import DynamicLoadjQuery from "./DynamicLoadjQuery.js";

function randomColor(color) {

  DynamicLoadjQuery(render);
  function render () {
    $('h1').css('color', color)
  } 

}

document.querySelector("#justAButton").addEventListener('click', function () {
  var colors = ["blue", "green", "red"]; 
  randomColor(colors[Math.floor(Math.random() * 3)])
})