if (module.hot) {
  module.hot.accept();
}

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import IndexWelcome from './components/Index/IndexWelcome.vue';
import HeaderMain from './components/Header/HeaderMain.vue';
import HeaderLogin from './components/Header/HeaderLogin.vue';


Vue.component('index-welcome' , IndexWelcome);
Vue.component('header-main' , HeaderMain);
Vue.component('header-login' , HeaderLogin);

Vue.config.productionTip = false;

new Vue({
  // router,
  store,
  // render: (h) => h(App),
}).$mount('#app');

$('#app').show();
