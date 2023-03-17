import Vue from 'vue'
import App from './App.vue'
import VueAMap from 'vue-amap'
import ElementUI from 'element-ui';
import store from './store';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.use(ElementUI);

// 设置 axios 的基础 URL，即所有的请求都会以该 URL 为基础路径
axios.defaults.baseURL = 'http://localhost:14567'
Vue.prototype.$http = axios
// 配置公共的 post 的 Content-Type
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false//禁用启动时生成生产提示，这个提示很烦人

// 初始化高德地图插件
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
    key: "ec8868d8d9367d24f98fa85b8b7bf1ba	", // 高德地图的key
    plugin: ["AMap.Autocomplete", "AMap.Geocoder", "AMap.Geolocation"],
    v: "1.4.15",
    uiVersion: "1.1"
  });

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    render: h => h(App),
  }).$mount('#app')

  //token拦截器
//   axios.interceptors.response.use(function (response) {
//     const token = response.headers.authorization;
//     if (token) {
//       localStorage.setItem('token', token);
//     }
//     return response;
//   }, function (error) {
//     return Promise.reject(error);
//   });
  
  
//   axios.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `${token}`;
//     }
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });