<template>
	<div class="okok">
		<el-row class="tac">
		  <el-col :span="24">
		    <el-menu default-active="2" class="el-menu-vertical-demo"  theme="dark">
		      <el-submenu index="1">
		        <template slot="title" el-menu-item-group >分类管理</template>
		        <router-link :to="{path:'/index/list1'}" appned>
		        	<el-menu-item index="1-1">增加一级分类</el-menu-item>
		        </router-link>
		        <router-link :to="{path:'/index/list2'}" appned>
		        	<el-menu-item index="1-2">增加二级分类</el-menu-item>
		        </router-link>
		      </el-submenu>
		      <el-submenu index="2">
		        <template slot="title" el-menu-item-group >接口管理</template>
		        <router-link :to="{path:'/index/add_api'}" appned>
		        	<el-menu-item index="1-1">增加接口文档</el-menu-item>
		        </router-link>
		        <router-link :to="{path:'/index/api_list_font'}" appned>
		        	<el-menu-item index="1-2">前台接口文档</el-menu-item>
		        </router-link>
		        <router-link :to="{path:'/index/api_list_back'}" appned>
		        	<el-menu-item index="1-2">后台接口文档</el-menu-item>
		        </router-link>
		      </el-submenu>
		     
	         <el-submenu index="3">
		        <template slot="title" el-menu-item-group >文章管理</template>
		        <router-link :to="{path:'/index/add_article'}" appned>
		        	<el-menu-item index="3-1">添加文章</el-menu-item>
		        </router-link>
		        <router-link :to="{path:'/index/article_list'}" appned>
		        	<el-menu-item index="3-2">文章列表</el-menu-item>
		        </router-link>
		      </el-submenu>
	          <router-link :to="{path:'/index/alllist'}" appned>
	        	<el-menu-item index="3">列表管理</el-menu-item>
	          </router-link>
		    </el-menu>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
   export default {
    data(){
    	return {
    		
    	}
    },
    mounted(){
    	
    }
  }
</script>

<style scoped>
	
	.el-menu-item-group__title{
		color: #fff;
	}
	.el-menu--dark .el-submenu .el-menu{
		background-color:rgb(249, 118, 253); ;
	}
	*{
		background:  rgba(249, 118, 118, 0.28);
	}
	*:hover{
		background-color:  rgb(249, 118, 118);
	}
	.el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title{
		color: #fff;
	}
	.okok{
		overflow: hidden;
	}
</style>