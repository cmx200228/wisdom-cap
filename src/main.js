import Vue from 'vue'
import App from './App.vue'
// import AmapVue from '@amap/amap-vue';
import ElementUI from 'element-ui';
import store from './store';
import router from './router';
// import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueAMap from 'vue-amap';   //引入高德
import '../theme/index.css'//引入element-ui的css

Vue.use(ElementUI);

// 设置 axios 的基础 URL，即所有的请求都会以该 URL 为基础路径
axios.defaults.baseURL = 'http://localhost:14567'
Vue.prototype.$http = axios
// 配置公共的 post 的 Content-Type
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false//禁用启动时生成生产提示，这个提示很烦人

// // 初始化高德地图插件
// Vue.use(AmapVue)
// AmapVue.config.version = '2.0'; // 默认2.0，这里可以不修改
// AmapVue.config.key = 'ec8868d8d9367d24f98fa85b8b7bf1ba';
// AmapVue.config.plugins = [
//   'AMap.Autocomplete',
//     'AMap.PlaceSearch',
//     'AMap.Scale',
//     'AMap.OverView',
//     'AMap.ToolBar',
//     'AMap.MapType',
//     'AMap.PolyEditor',
//     'AMap.CircleEditor',
// ];


VueAMap.initAMapApiLoader({
  key: 'ec8868d8d9367d24f98fa85b8b7bf1ba',
  //插件集合
  plugin: [
    'AMap.Geolocation',  //定位空间，用来获取和展示用户主机所在的经纬度位置
    ' AMap.Autocomplete ',  //输入提示插件
    ' AMap.PlaceSearch ', //POI搜索插件
    ' AMap.Scale ',   //右下角缩略图插件，比例尺
    ' AMap.OverView ', //地图鹰眼插件
    ' AMap.ToolBar ',  //地图工具条
    ' AMap.MapType ',  //类别切换空间，实现默认图层与卫星图，实施交通层之间切换的控制
    ' AMap.PolyEditor ', //编辑 折线多边形
    ' AMap.CircleEditor ',
    "AMap.Geocoder"     //地图编码
  ]
});

Vue.use(VueAMap);
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