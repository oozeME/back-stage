<template>
	<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
	  <h3>一级类名设置</h3>
	  <el-form-item label="中文类名" prop="age1">
	   	 <el-select v-model="ruleForm2.oldId" class="item" placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.id"
		      :label="item.cnname"
		      :value="item.id">
		    </el-option>
		  </el-select>
	  </el-form-item>
	  <h3>二级类名设置</h3>
	  <el-form-item label="中文类名" prop="age2">
	    <el-input v-model.number="ruleForm2.age2"></el-input>
	  </el-form-item>
	  <el-form-item label="英文类名" prop="pass2">
	    <el-input v-model="ruleForm2.pass2" auto-complete="off"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="submitForm">确定</el-button>
	  </el-form-item>
	</el-form>
</template>

<script>
import Unique from "../../assets/js/Unique.js"
export default {
    data() {
       var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户不能为空'));
        }else if(!(/[\u4e00-\u9fa5]/).test(value)){
          return callback(new Error('请输入中文'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户不能为空'));
        }else if((/[\u4e00-\u9fa5]/).test(value)){
          callback(new Error('请输入英文'));
        }
      };
      return {
      	options: [],
        value: '',
        ruleForm2: {
          oldId:"请选择",
          pass2: '',
          age2: ''
        },
        key:"",
        rules2: {
          pass2: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age2: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
    },
    mounted(){
    	var _this=this;
    	this.axios.get("http://localhost:3000/api/back_class/select_one_class")
    	.then(function(data){
    		_this.options=data.data.data
    		console.log(_this.value)
    	},function(){
    		console.log("err")
    	})
    },
    methods: {
      submitForm() {
      	var _this=this;
      	if(this.ruleForm2.oldId!=="请选择" && this.ruleForm2.pass2!=="" && this.ruleForm2.age2!==""){
      		this.axios.post("http://localhost:3000/api/back_class/add_two_class",{
				  oneId:_this.ruleForm2.oldId,
		          enname_two:_this.ruleForm2.pass2,
		          cnname_two:_this.ruleForm2.age2
				
	      	}).then(function(data){
	    		_this.$message(data.data.msg)
	      	},function(){
	      		console.log(data.data.msg)
	      	})
      	}else{
      		this.$message("请输入内容")
      	}
      }
    }
  }
	//01:03:51
</script>

<style scoped>
	.froms{
		width:50%;
		height:50%;
	}
	.btn-center{
		text-align: center;
	}
	.el-form{
		width:33.33333%;
		min-width: 300px;
	}
	.el-button--primary:focus, .el-button--primary:hover{
		background: lightpink;
		border:none;
		color: #666;
	}
	.el-button--primary{
		background: #ff4949;
		border:none;
		color: #fff;
	}
	h3{
		font-size: 24px;
		font-weight: 400;
		margin: 20px 0 10px 35px;
	}
</style>