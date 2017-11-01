<template>
	<el-row>
	 <el-col :span="5" class="left_l">
	  	<menus></menus>
	 </el-col>
	 <el-col :span="19" class="left_r">
	 	<router-view></router-view>
	 </el-col>
	</el-row>
</template>

<script>
	import menus from "./page-menu"
	export default {
		data(){
			return {
				
			}
		},
		components:{
			menus
		}
	}
</script>

<style>
	.el-menu--dark{
		background:  rgb(249, 118, 118);
	}
	.header{
		text-align: center;
	}
	.header h2{
		display: inline;
	}
	img{
		width: 60px;
		text-align: center;
	}
	.el-menu--horizontal>.el-menu-item:hover, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title, 	.el-menu--horizontal>.el-submenu:hover .el-submenu__title {
	    border-bottom: none;
	}
	.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
    	color:#fff;
    }
    .el-menu--horizontal.el-menu--dark .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu__title:hover{
    	background: indianred;
    }
    .top{
		background:  rgb(249, 118, 118);
    }
    .bot{
    	height:580px;
    	width:100%;
    	background:rgba(249, 118, 118, 0.21)
    }
    .user_c{
    	background:  rgb(249, 118, 118);
    	text-align: center;
    }
    .user_c span{
    	display: inline-block;
    	height:60px;
    	text-align: center;
    	padding-top:18px;
    	color:#fff;
    	font-size: 24px;
    }
    .left_l{
    	height: 580px;
    	background:rgba(249, 118, 118, 0.8);
    }
    .index{
    	background: #f1f1f1;
    }
</style>