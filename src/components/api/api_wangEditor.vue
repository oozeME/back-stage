<template>
<el-form ref="form" :model="form" label-width="80px" class="table">
  <el-form-item label="标题">
    <el-input v-model="form.tit"></el-input>
  </el-form-item>
  <el-form-item label="一级分类">
    <el-select v-model="form.region1" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="二级分类">
    <el-select v-model="form.region2" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="作者">
    <el-input v-model="form.name">汪可</el-input>
  </el-form-item>
  <el-form-item label="推荐">
    <el-radio-group v-model="form.resource1">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="状态" class="topfu">
    <el-radio-group v-model="form.resource2">
      <el-radio label="显示"></el-radio>
      <el-radio label="隐藏"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="时间">
    <el-input v-model="form.time"></el-input>
  </el-form-item>
  <el-form-item label="活动形式">
   <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
   <el-form-item label="内容">
 		 <div id="editor"></div>  
  </el-form-item>
  <el-form-item  label="anniu" class="btns">
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
// import vueWangeditor from 'vue-wangeditor'
 export default {
    data() {
      return {
        form: {
          name: '',
          tit:'',
          time:'',
          desc:"",
          region1: '',
          region2: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource1: '',
          resource2: '',
          desc: ''
        },
        content:"",
        editor: null,
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
       gettext() {
	        // 获取editor中的文本
	        console.log(this.editor.getContent())
	    }

	  },
	  mounted(){
    	this.editor = UE.getEditor('editor');
    },
     destroyed() {
        // 将editor进行销毁
        this.editor.destroy();
    }
  }
</script>

<style>
	.btns{
		margin-top:300px;
	}
	.table{
		width:70%;
		margin:20px 3% ;
	}
	.topfu{
		margin-top:-20px;
	}
	#editor{
		width:100%;
		height:100px;
		
	}

</style>