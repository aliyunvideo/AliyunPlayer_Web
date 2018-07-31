import Vue from 'vue';
import App from './App.vue';

import "babel-polyfill";

import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.axios = axios;

import Loading from './components/Loading';

Vue.component('Loading', Loading);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})