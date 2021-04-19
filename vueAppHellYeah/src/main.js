import Vue from 'vue'
import App from './App.vue'

//importando o novo módulo
import VueRouter from 'vue-router';

import {routes} from './router';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);

//Estou criando um gançho para quando chamar um endereço ele completa com este local, facilitando a repetição de códigos em (home.vue e cadastro.vue)
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VueRouter);

//Com auxilio do Vuerouter, eu vou passar as rodas configuradas
//para ele... E vai me devolver um roteador que terá a função

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  //na minha vue ista
  router,
  render: h => h(App)
})

