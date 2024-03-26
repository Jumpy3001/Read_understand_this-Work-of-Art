import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import { ModelObj } from 'vue-3d-model'; // Importieren des ModelObj aus dem 'vue-3d-model'-Paket

Vue.use(VueYouTubeEmbed)
Vue.use(ModelObj); // Verwenden Sie das 'ModelObj' aus dem 'vue-3d-model'-Paket
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')