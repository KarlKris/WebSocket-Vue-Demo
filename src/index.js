import Vue from 'vue';
import App from './vue/App';
import Websocket from './vue/Websocket';

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});

new Vue({
  el: '#websocket',
  template: '<Websocket/>',
  components: { Websocket }
});
