import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from './store';
import '../node_modules/bulma/bulma.sass';

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  store: new Vuex.Store(store),
  render: (h) => h(App),
}).$mount('#app');
