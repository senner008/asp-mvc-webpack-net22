if (module.hot) {
  module.hot.accept();
}

import '../bootstrap/dist/css/bootstrap.css';
import '../css/styles.css';

function randomColor(color: string) {

  function render() {
    $('h1').css('color', color);
  }
  render();
}

document.querySelector('#justAButton')!.addEventListener('click', () => {
  const colors: string[] = ['blue', 'green', 'red'];
  randomColor(colors[Math.floor(Math.random() * 3)]);
});
