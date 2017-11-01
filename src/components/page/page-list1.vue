<template>
	<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
	  <h3>一级类名设置</h3>
	  <el-form-item label="中文类名" prop="age1">
	    <el-input v-model.number="ruleForm2.age1"></el-input>
	  </el-form-item>
	  <el-form-item label="英文类名" prop="pass1">
	    <el-input v-model="ruleForm2.pass1" auto-complete="off"></el-input>
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
        ruleForm2: {
          pass1: '',
          age1: '',
          pass2: '',
          age2: ''
        },
        rules2: {
          pass1: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age1: [
            { validator: checkAge, trigger: 'blur' }
          ],
          pass2: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age2: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm() {
      	
      	var _this=this;
      	var state=null;
      	var bool=true;
      	if(this.ruleForm2.age1 && this.ruleForm2.age1!=="" && this.ruleForm2.pass1!=="" && this.ruleForm2.pass1 && this.ruleForm2.age2 && this.ruleForm2.age2!=="" && this.ruleForm2.pass2!=="" && this.ruleForm2.pass2){
      		this.axios.post("http://localhost:3000/api/back_class/add_class_one",{
      				cnname_one:_this.ruleForm2.age1,
      				enname_one:_this.ruleForm2.pass1,
      				cnname_two:_this.ruleForm2.age2,
      				enname_two:_this.ruleForm2.pass2
      		})
	        .then(function(data){
	        	console.log(data.data.code)
	        	if(data.data.code==="1014"){
	        		_this.$notify({
			          title: '成功',
			          message: '添加成功',
			          type: 'success'
			        });
	        	}else{
	        		_this.$notify({
			          title: '失败',
			          message: data.data.msg,
			          type: 'warning'
			        });
	        	}
	        	
	        })
      	}else{
      		this.$notify({
	          title: '失败',
	          message: '内容不能为空',
	          type: 'warning'
	        });
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