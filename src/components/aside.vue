<template>
  <el-menu>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-location-outline"></i>实时位置管理</template>
      <el-menu-item index="1-1">菜单1</el-menu-item>
      <el-menu-item index="1-2">菜单2</el-menu-item>
      <el-menu-item index="1-3">菜单3</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>导航二</template>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>导航三</template>
    </el-submenu>
  </el-menu>
</template>
  
  <script>
export default {
  name: "AsideContent",
  components: {},
  props: ["isCollapse"],
  data() {
    return {
      activeIndex: "/map",
      navList: [
        {
          name: "/map",
          navItem: "位置管理",
          children: [
            //{name: '/tower-info-management', navItem: '基本信息管理'},
            //{name: '/tower-rust-detection-management', navItem: '锈蚀检测管理'},
            { name: "/base-info-management", navItem: "基本信息" },
            { name: "/resistance-upload-log-management", navItem: "电阻日志" },
          ],
        },
        {
          name: "/user-management",
          navItem: "用户管理",
          children: [{ name: "/user_management", navItem: "用户列表" }],
        },
      ],
    };
  },
  watch: {
    $route() {
      this.setCurrentRoute();
    },
  },
  // methods: {
  //   handleOpen(key, keyPath) {
  //     // console.log('打开：', key, keyPath)
  //   },
  //   handleClose(key, keyPath) {
  //     // console.log('关闭：', key, keyPath)
  //   },
  //   handSelect(key, keyPath) {
  //     // console.log('选择：', key, keyPath)
  //   },
  //   setCurrentRoute() {
  //     this.activeIndex = this.$route.path;
  //   },
  // },
};
</script>
  
  <style scoped>
.el-menu {
  height: 100%;
}

::v-deep .el-submenu {
  padding-left: 0;
}
</style>
  