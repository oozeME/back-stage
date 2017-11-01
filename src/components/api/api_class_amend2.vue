<template>
	<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
	  <h3>二级类名设置</h3>
	  <el-form-item label="中文类名" prop="ruleForm2">
	    <el-input v-model.number="ruleForm2.cnname_two"></el-input>
	  </el-form-item>
	  <el-form-item label="英文类名" prop="ruleForm2">
	    <el-input v-model="ruleForm2.enname_two" auto-complete="off"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="submitForm">确定</el-button>
	  </el-form-item>
	</el-form>
</template>
<script>
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
	        ruleForm2:{},
	        lastList:{},
	        oldenname:{},
	        rules2: {
	          pass1: [
	            { validator: validatePass, trigger: 'blur' }
	          ],
	          age1: [
	            { validator: checkAge, trigger: 'blur' }
	          ]
	        }
	      }
	    },
        created() {
            console.log(this.$route.params)
            this.ruleForm2 = this.$route.params.data;
            this.oldenname.oldenname_two = this.$route.params.data.enname_two;
        },
        methods: {
            submitForm(formName) {
            	Object.assign(this.ruleForm2,this.oldenname)
            	console.log(this.ruleForm2)
                this.axios.post("/api/back_class/amend_class_two",this.ruleForm2).then(function(data) {
                	console.log(data)
                    if (data.data.code == "1062") {
                    	this.open2()
                        this.$router.go(-1)
                        
                    } else {
                        this.open4()
                    }
                }.bind(this))

                    
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 成功消息提示
            open2() {
                this.$message({
                    message: '恭喜你，修改消息成功',
                    type: 'success'
                });
            },
            // 失败消息提示
            open4() {
                this.$message.error('不好意思，修改失败');
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 20px 0 20px 40px
    }
    .demo-ruleForm{
    	width:300px;
    }
</style>