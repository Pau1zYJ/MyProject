<template>
    <el-container>
        <el-header>
            <el-image :src="url" fit="fill" style="height: 50%"></el-image>
            <p style="margin-left: 5px">UoN-PREDICT</p>
        </el-header>
        <el-menu default-active="1" mode="horizontal" style="margin-top: 60px;justify-content: center;" @select="handleSelect">
            <el-menu-item index="1"> 
                <div style="height: 20px;width: 20px;margin-right: 5px">
                    <el-image :src="require('@/assets/About.png')" fit="fill" style="display:flex"></el-image>
                </div>
                <div style="font-weight:700">About</div>
                </el-menu-item>
            <el-menu-item index="2">
                <div style="height: 20px;width: 20px;margin-right: 5px">
                    <el-image :src="require('@/assets/Use.png')" fit="fill" style="display:flex"></el-image>
                </div>
                <div style="font-weight:700">Use</div>
            </el-menu-item>
            <el-menu-item index="3">
                <div style="height: 20px;width: 20px;margin-right: 5px">
                    <el-image :src="require('@/assets/References.png')" fit="fill" style="display:flex"></el-image>
                </div>
                <div style="font-weight:700">References</div>
            </el-menu-item>
            <el-menu-item index="4">                
                <div style="height: 20px;width: 20px;margin-right: 5px">
                    <el-image :src="require('@/assets/Disclaimer.png')" fit="fill" style="display:flex"></el-image>
                </div>
                <div style="font-weight:700">Disclaimer</div></el-menu-item>
        </el-menu>
        <el-container>
            <el-main>
                <About v-if="pageIndex == 1"></About>
                <Use v-else-if="pageIndex == 2"></Use>
                <References v-else-if="pageIndex == 3"></References>
                <Disclaimer v-else></Disclaimer>
            </el-main>
            
        </el-container>
        <el-footer>
            <div style="color: #fff">© 2022 Yajun Zhao. Developed in collaboration with Professor Chen, Dr T'ng Chang Kwok</div>
        </el-footer>
    </el-container>
    
</template>
<script>
import About from './About.vue'
import Use from './Use.vue'
import Disclaimer from './Disclaimer.vue'
import References from './References.vue'

export default {
    name: 'Home',
    components: {
        About,
        Disclaimer,
       References,
       Use
    },
    data(){
        return{
            url: require("../assets/logo.png"),
            pageIndex: 1,
        }
    },
    methods:{
        
        handleSelect(index)
        {
            const self = this;
            self.pageIndex = index;
        }
    },
    
}
</script>

<style scoped>
    .el-header{
     background-color: #409EFF;
     color: #333;
     text-align: left;
     line-height: 60px;
     width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    z-index: 999;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
  }
  
  
  
  .el-main{
      display: flex;
      overflow-y: hidden;
      margin-bottom: 60px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  

  

  .el-footer{
      width: 100%;
      z-index: 999;
    position: fixed;
    bottom: 0;
    background: #616161;
    display: flex;
    align-items: center;
        height: 40px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
