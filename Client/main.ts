if (module.hot) {
  module.hot.accept();
}

import 'bootstrap/dist/css/bootstrap.css';
import 'css/styles.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import HelloWorld from "./components/HelloWorld.vue"
Vue.component('hello-world' , HelloWorld);

Vue.config.productionTip = false;

new Vue({
  // router,
  store,
  // render: (h) => h(App),
}).$mount('#app');
