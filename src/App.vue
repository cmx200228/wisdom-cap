<template>
  <div id="app" v-cloak>
    <el-container direction="vertical">
      <el-header  v-if="!$route.meta.hideNav">
        <!-- <HeaderContent @showAside="showAside"></HeaderContent> -->
      </el-header>
      <el-container>
        <el-aside width="auto" v-if="!$route.meta.hideNav">
          <!-- <AsideContent :is-collapse="isCollapsed"></AsideContent> -->
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
