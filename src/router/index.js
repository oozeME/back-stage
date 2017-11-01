import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import pageContent from '@/components/page/page-content'
import list1 from '@/components/page/page-list1'
import alllist from '@/components/page/alllist'
import list2 from '@/components/page/addlist'



//接口文档
import add_api from '@/components/api/api_insert'
import api_list_font from '@/components/api/api_list_font'
import api_list_back from '@/components/api/api_list_back'
import api_detail from '@/components/api/api_detail'
import api_amend from '@/components/api/api_amend'
import api_class_amend from '@/components/api/api_class_amend'
import api_class_amend2 from '@/components/api/api_class_amend2'

// 分类管理
import add_class_one from '@/components/class/add_class_one'


//文章管理
import add_article from '@/components/page/article/add_article'
import article_list from '@/components/page/article/article_list'
import amend_article from '@/components/page/article/amend_article'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[{
      	path:"/",
      	name:"pageContent",
      	component:pageContent
      },{
      	path:"list1",
      	name:"list1",
      	component:list1
      },{
      	path:"list2",
      	name:"list2",
      	component:list2
      },{
	        path: 'add_class_one',
	        name: 'add_class_one',
	        component: add_class_one,
	    }, {
	        path: 'add_api',
	        name: 'add_api',
	        component: add_api,
	    }, {
	        path: 'api_list_font',
	        name: 'api_list_font',
	        component: api_list_font,
	    }, {
	        path: 'api_list_back',
	        name: 'api_list_back',
	        component: api_list_back,
	    }, {
	        path: 'api_detail',
	        name: 'api_detail',
	        component: api_detail,
	    }, {
	        path: 'api_amend',
	        name: 'api_amend',
	        component: api_amend,
	    }, {
	        path: 'alllist',
	        name: 'alllist',
	        component: alllist,
	    }, {
	        path: 'api_class_amend',
	        name: 'api_class_amend',
	        component: api_class_amend,
	    },{
	        path: 'api_class_amend2',
	        name: 'api_class_amend2',
	        component: api_class_amend2,
	    },{
	        path: 'add_article',
	        name: 'add_article',
	        component: add_article,
	    },{
	        path: 'article_list',
	        name: 'article_list',
	        component: article_list,
	    },{
	        path: 'amend_article',
	        name: 'amend_article',
	        component: amend_article,
	    }]
    }
    
  ]
})
