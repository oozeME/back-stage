<template>
	<div class="box">
		<div class="top">
			<div class="imgs"><img src="../assets/logo.png" alt="" /></div>
		</div>
		<div class="bot">
			<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			  <el-form-item label="用户" prop="age">
			    <el-input v-model.number="ruleForm2.age"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm">登录</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
    data() {
       var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户不能为空'));
        }
        
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
      };
      return {
        ruleForm2: {
          pass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age: [
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
      	if(this.ruleForm2.age && this.ruleForm2.age!=="" && this.ruleForm2.pass!=="" && this.ruleForm2.pass){
			var _this=this;
			this.axios.post("http://localhost:3000/api/back_class", {
	            loginname: _this.ruleForm2.age,
	            loginpw: _this.ruleForm2.pass
	        }).then(function(data) {
	            console.log(data)
	            _this.$message(data.data.msg);
	            if (data.data.code == "1001") {
	                sessionStorage.setItem("id", data.data.userid);
			        sessionStorage.setItem("name",_this.ruleForm2.age);
			        _this.$router.push("/index");
	            }
	        })
			
      	}
      }
    }
  }
	//01:03:51
</script>

<style scoped>
	.box{
		width:100%;
		height:100%;
		background: indianred;
	}
	.top{
		width:100%;
		height:30%;
		background: white;
		position: relative;
	}
	.top .imgs{
		width:120px;
		height:120px;
		position: absolute;
		left:50%;
		top:100%;
		margin-left:-60px;
		margin-top:-60px;
		background: white;
		border-radius: 50%;
	}
	img{
		width:100%;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		border-radius:50%;
	}
	.bot{
		width:100%;
		height:70%;
		background: rgb(249, 118, 118);
		padding-top:10%;
	}
	.froms{
		width: 30%;
		height:50%;
		margin-left:32%;
		
	}
	.btn-center{
		text-align: center;
	}
	.el-form{
		width:33.33333%;
		margin-left:31%;
		min-width: 300px;
	}
	.el-button{
		width:100%;
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
	
</style>