<template>
  <div class="index">
  	<div class="top">
  		<el-row>
			  <el-col :span="5" class="header">
			  	<img src="../assets/logo.png" alt="" />
			  	<h2>hello</h2>
			  </el-col>
			  <el-col :span="15">
				  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
				 	 <el-menu-item index="1">处理中心</el-menu-item>
				</el-menu>
			  </el-col>
			  <el-col :span="4" class="user_c">
			  	<span>登录的账户是: <b>{{username}}</b>  </span>
			  </el-col>
			</el-row>
  	</div>
  	<div class="bboot">
  		<index-content></index-content>
		</div>
  </div>
</template>

<script>

import indexContent from "./page/page-index"
	
export default {
  name: 'index',
  data () {
    return {
     activeIndex: '1',
      activeIndex2: '1',
      username:""
      
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
   },
   mounted(){
   	this.username=sessionStorage.getItem("name")
   },
  components:{
  	indexContent
  }
}
</script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	img{
		width:60px;
		height:60px;
	}
	.header{
		background: rgb(249, 118, 118);
	}
	.user_c span{
		font-size: 16px;
	}
	.user_c span b{
		font-size: 24px;
	}
	
</style>
