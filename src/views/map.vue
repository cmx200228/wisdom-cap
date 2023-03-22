<template>
  <div class="map_address">
    <div class="address-wrapper" 
      :style="{width:'100%',height:'80%'}"
    >
        <!-- <el-amap-search-box
            class="search-box"
            :search-option="searchOption"         
            :on-search-result ="onSearchResult"   
        >
           搜索条件 是个对象 属性是city城市名，citylimit：false； 搜索回调函数 
          
        </el-amap-search-box> -->
        <el-amap 
          vid="amap" 
          class="amap-demo"  
          :amap-manager="amapManager" 
          :plugin="plugin"  
          :events="events"   
          :center="center" 
          :zoom="zoom"
        >
            <!-- 点标记在地图上显示的位置，默认为地图中心点， -->
          <el-amap-marker
            v-for="(marker,index) in markers"
            :key ="'marker'+index"
            :position ="marker" 
          > </el-amap-marker>
        </el-amap>
    </div>
  </div>
  </template>
  
  <script>
  //引入获取实例
  import {AMapManager} from "vue-amap"
  let amapManager= new AMapManager();
  let Geocoder = '';     //先声明变量
  export default {
      data(){
          const self = this;
          return{
              center:[0, 0],
              loaded:false,
              zoom: 17,
              input:"",
              lng:0,
              lat:0,
              amapManager,
              searchOption: {
                city: "重庆",
                citylimit: false,
              },  
              markers: [],          //标记
              events:{
                  init:(o)=>{
                    o.getCity((result)=>{
                      console.log(result)
                    })
                  },
                  click:(e)=>{
                    self.center = [e.lnglat.lng, e.lnglat.lat];
                    console.log(self.center)
                    self.markers=[];
                    self.markers.push(self.center)
                    Geocoder.getAddress(self.center, function (status, result) { //根据坐标获取位置
                      if (status === "complete" && result.info === "OK") {
                        console.log(result.regeocode.formattedAddress)
                        self.input = result.regeocode.formattedAddress;
                        document.querySelector(".search-box-wrapper input").value = self.input;
                        }
                    })
                  }
                },
              plugin:[
                {
                  enableHighAccuracy:true,   //是否使用高精度定位，默认true
                  timeout:100,               //超过10秒后停止定位，默认：无穷大
                  convert:true,          //自动偏移后的坐标为高德坐标，默认：true
                  showButton:true,       //显示定位按钮，默认：true
                  buttonPosition:'RB',  //定位按钮停靠位置，默认'LB'，左下角
                  showMarker:true,      //定位成功后在定位到的位置显示标记，默认：true
                  showCircle:true,      //定位成功后用圆圈表示定位精度范围，默认：true
                  panToLocation:true,   //定位成功后将定位到的位置作为地图中心点，默认true
                  zoomToAccuracy:true,   //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                  extensions:"all",
                  pName:"Geolocation",     //AMap-Geolocation 定位插件
                  events: {
                    init(o) {
                      // o 是高德地图定位插件实例
                      o.getCurrentPosition((status, result) => {
                        console.log(result.position)
                        if (result && result.position) {
                          self.lng = result.position.lng;              //设置经度
                          self.lat = result.position.lat;              //设置纬度
                          self.center = [self.lng,self.lat];          //设置坐标
                          self.markers.push(self.center)              //获取当前定位并存入标记中显示标记点
                          self.loaded = true;                          //load
                          self.zoom = 14;
                          self.$nextTick();                            //页面渲染好后             
                        }
                      })
                    }
                  }
                },
                //Geocoder编码：根据地理名称来获得地点的经纬度
                {
                  pName:"Geocoder",
                  events:{
                    init:(o)=>{
                      Geocoder = o; // o 则是AMap.Geocoder的实例 对外部的Geocoder变量进行赋值，在任何地方就都可以使用
                      //data里的events中使用了Geocoder
                      o.getAddress(self.center, function (status, result) { //根据坐标获取位置
                        if (status === "complete" && result.info === "OK") {
                          self.input = result.regeocode.formattedAddress;
                          document.querySelector(".search-box-wrapper input").value = self.input;  
                        } 
                      })
                    }
                  }
              }]
          }
      },
      methods:{
        //点击搜索后触发的事件
        onSearchResult(pois){
          console.log(pois)     
          this.input = document.querySelector('.search-box-wrapper input').value 
          this.center = [pois[0].lng,pois[0].lat]        //选择了第一个值
          this.markers = [];    //标记点先清空  
          this.markers.push([pois[0].lng,pois[0].lat])   //把搜索的位置的第一个值存入标记中并显示标记点
          console.log(this.markers);
        }
      },
      mounted(){
        console.log('加载成功')
      }
  
  }
  </script>
  
  <style scoped lang="less">
  .map_address{
    height:100vh;
  }
  .address-wrapper{
    display:flex;
    flex-direction:column;
  }
  .search-box{
    width:98vw;
    height:40px;
  }
  .amap-demo{
      flex:1;
      height:80vh;
  }
  </style>
  