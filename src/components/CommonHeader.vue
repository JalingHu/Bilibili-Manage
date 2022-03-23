<template>
  <header>
      <div class="l-content">
      <!-- 添加图标 -->
      <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini" class="el-button"></el-button>
     <!--  <h3 style="color:#fff">首页</h3> -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}} </el-breadcrumb-item>

        </el-breadcrumb>
      <div class="r-content">
          <el-dropdown trigger="click" size="mini">
              <span>
                  <img class='user' :src="userImg">
              </span>
               <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >个人中心</el-dropdown-item>
                <el-dropdown-item >退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
  </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'CommonHeader',
    data(){
        return{
            userImg:require('../assets/images/HUu.png')
        }
    },
    methods: {
        handleMenu(){
            // 此时要改变state的值，只能通过
            this.$store.commit('collapseMenu')
        }
    },
    computed:{
        ...mapState({
            tags:sate => sate.tab.tabsList
        })

    }
}
</script>
<style lang="less" scoped>
    header {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .l-content {
         display: flex;
         align-items: center;
         .el-button {
             margin-right: 20px;
         }
         h3 {
             font-weight: 400;
         }
    .r-content {
         margin-left: 5px;
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

    }

</style>
