import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Frontpage from '@/components/Frontpage.vue';
import Portrait from '@/components/Portrait.vue';

Vue.use(Vuetify);
Vue.component('front-page', Frontpage);
Vue.component('portrait', Portrait);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
