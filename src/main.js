import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Portrait from './components/Portrait.vue';
import Frontpage from './components/Frontpage.vue';
import PortProject from './components/PortProject.vue';
import Portfolio from './components/Portfolio.vue';
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.config.productionTip = false

Vue.component("portrait", Portrait);
Vue.component("front-page", Frontpage);
Vue.component("portfolio-project", PortProject);
Vue.component("portfolio", Portfolio);
Vue.use(VueSimpleMarkdown);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
