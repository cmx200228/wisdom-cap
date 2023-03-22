<template>
  <div id="app" v-cloak>
    <el-container direction="vertical">
      <el-header height="90px">
        <HeaderContent></HeaderContent>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <AsideContent></AsideContent>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideContent from "./components/aside";
import HeaderContent from "./components/header";
export default {
  name: "App",
  components: {
    AsideContent,
    HeaderContent,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.el-header,
.el-footer {
  background-color: #45F2AC;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>



