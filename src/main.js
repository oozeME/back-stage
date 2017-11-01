// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import vueAxios from "vue-axios"
import elementsUI from "element-ui"
import VueRouter from "vue-router"

import '../static/Ueditor/ueditor.config.js'
import '../static/Ueditor/ueditor.all.min.js'
import '../static/Ueditor/lang/zh-cn/zh-cn.js'
import '../static/Ueditor/ueditor.parse.min.js'



import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(vueAxios,axios)
Vue.use(elementsUI)

router.beforeEach(function(to,from,next){
	if(to.name==="login"){
		next();
	}else{
		if(sessionStorage.getItem("id")){
			next()
		}else{
			next(false)
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
