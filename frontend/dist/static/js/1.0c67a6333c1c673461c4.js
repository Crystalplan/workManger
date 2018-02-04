webpackJsonp([1,24],{"5eyz":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getInfo=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(r.a)({url:"/api/admin",method:"get",params:{page:e,pageSize:t,name:n.name,email:n.email}})},e.getCurrentPage=function(n){return Object(r.a)({url:"/api/admin",method:"get",params:{page:n}})},e.getInfoById=function(n){return Object(r.a)({url:"/api/admin/"+n,method:"get"})},e.resetAdminByPsw=function(n,e){return Object(r.a)({url:"/api/admin/"+n+"/reset",method:"post",data:{password:e}})},e.uploadAdminByImg=function(n){return Object(r.a)({url:"/api/admin/uploadAvatar",method:"post",data:n,headers:{"Content-Type":"multipart/form-data"}})},e.updateInfo=function(n,e){return Object(r.a)({url:"/api/admin/"+n,method:"put",params:{name:e.name,role:e.role,avatar:e.avatar},headers:{"Content-Type":"application/x-www-form-urlencoded"}})},e.deleteInfoById=function(n){return Object(r.a)({url:"/api/admin/"+n,method:"delete"})},e.addInfo=function(n){return console.log(n),Object(r.a)({url:"/api/admin",method:"post",data:n})},e.uploadFile=function(n){return Object(r.a)({url:"/api/admin/upload",method:"post",data:n,headers:{"Content-Type":"multipart/form-data"}})},e.Model=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";this.name=n,this.email=e,this.role=t,this.avatar=r,this.password=a,this.password_confirmation=o},e.SearchModel=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";this.name=n,this.email=e};var r=t("Vo7i")},"8fMZ":function(n,e,t){var r=t("jTTF");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t("rjj0")("49930c76",r,!0)},Cdx3:function(n,e,t){var r=t("sB3e"),a=t("lktj");t("uqUo")("keys",function(){return function(n){return a(r(n))}})},"PC+2":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("fZjL"),a=t.n(r),o=(t("TIfe"),t("5eyz")),i=t("STSY"),s={data:function(){return{}},props:{image:{type:String,required:!0},showImg:{type:String,required:!0}},name:"avatar-uploader",methods:{beforeUpload:function(n){this.$emit("save",n)}},mounted:function(){}},l={render:function(){var n=this.$createElement,e=this._self._c||n;return e("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{drag:"",action:"123",accept:".jpg,.png","before-upload":this.beforeUpload}},[this.showImg.length>0?e("img",{staticClass:"avatar",attrs:{src:this.image}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),this._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[this._v("点击上传头像，只能上传jpg/png格式文件。")])])},staticRenderFns:[]};var u=t("VU/8")(s,l,!1,function(n){t("gARq")},"data-v-b125140a",null).exports,d=t("/98u");function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";this.name=n,this.email=e,this.role=t,this.password=r,this.checkPass=a,this.avatar=o}var m={data:function(){var n=this;return{imageUrl:"",form:new c,roles:[],rules:{name:[{required:!0,message:"请填写名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur,change"}],role:[{required:!0,message:"请选择权限",trigger:"change"}],password:[{required:!0,validator:function(e,t,r){t.length<6&&r(new Error("密码不能小于6位")),""===t?r(new Error("请输入密码")):(""!==n.form.checkPass&&n.$refs.form.validateField("checkPass"),r())},trigger:"blur"}],checkPass:[{required:!0,validator:function(e,t,r){""===t?r(new Error("请再次输入密码")):t!==n.form.password?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}]}}},components:{avatarUploader:u},methods:{submitForm:function(n){var e=this;this.$refs[n].validate(function(n){if(!n)return e.$message.error("数据校验不通过，请重新填写"),!1;Object(o.addInfo)(e.form).then(function(n){e.$alert("新管理员用户建立成功","友情提示",{callback:function(n){var t=new c;e.form=t}})}).catch(function(n){var t=n.response.data;if(422==t.status_code){var r=[],o=t.message;a()(o).forEach(function(n){r.push(o[n])}),e.$notify.error({title:"后台数据校验出错",message:r.join("||")})}})})},resetForm:function(n){this.$refs[n].resetFields()},saveAvatarImg:function(n){var e=this,t=new FormData;return t.append("photo",n),Object(o.uploadAdminByImg)(t).then(function(n){var t=n.data.url;e.imageUrl=d.a.site+t,e.form.avatar=t}),!0}},mounted:function(){},beforeCreate:function(){var n=this;Object(i.getRoles)().then(function(e){n.roles=e.data}).catch(function(n){})}},p={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("el-form",{ref:"form",staticClass:"demo-form",attrs:{model:n.form,rules:n.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户昵称",prop:"name"}},[t("el-input",{model:{value:n.form.name,callback:function(e){n.$set(n.form,"name",e)},expression:"form.name"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:n.form.email,callback:function(e){n.$set(n.form,"email",e)},expression:"form.email"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:n.form.password,callback:function(e){n.$set(n.form,"password",e)},expression:"form.password"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:n.form.checkPass,callback:function(e){n.$set(n.form,"checkPass",e)},expression:"form.checkPass"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"用户权限",prop:"role"}},[t("el-select",{attrs:{multiple:"",placeholder:"请选择权限"},model:{value:n.form.role,callback:function(e){n.$set(n.form,"role",e)},expression:"form.role"}},n._l(n.roles,function(e){return t("el-option",{key:e.name,attrs:{label:e.explain,value:e.name}},[n._v(n._s(e.explain))])}))],1),n._v(" "),t("el-form-item",{attrs:{label:"用户头像"}},[t("avatar-uploader",{attrs:{image:n.imageUrl,"show-img":n.form.avatar},on:{save:n.saveAvatarImg}})],1),n._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(e){n.submitForm("form")}}},[n._v("立即创建")]),n._v(" "),t("el-button",{on:{click:function(e){n.resetForm("form")}}},[n._v("重置")])],1)],1)],1)},staticRenderFns:[]};var f=t("VU/8")(m,p,!1,function(n){t("8fMZ")},null,null);e.default=f.exports},cQeN:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n.avatar-uploader .el-upload[data-v-b125140a] {\r\n  border: 1px dashed #d9d9d9;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.avatar-uploader .el-upload[data-v-b125140a]:hover {\r\n  border-color: #20a0ff;\n}\n.avatar-uploader-icon[data-v-b125140a] {\r\n  font-size: 28px;\r\n  color: #8c939d;\r\n  width: 178px;\r\n  height: 178px;\r\n  line-height: 178px;\r\n  text-align: center;\n}\n.avatar[data-v-b125140a] {\r\n  width: 178px;\r\n  height: 178px;\r\n  display: block;\n}\r\n",""])},fZjL:function(n,e,t){n.exports={default:t("jFbC"),__esModule:!0}},gARq:function(n,e,t){var r=t("cQeN");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t("rjj0")("3e303b82",r,!0)},jFbC:function(n,e,t){t("Cdx3"),n.exports=t("FeBl").Object.keys},jTTF:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},uqUo:function(n,e,t){var r=t("kM2E"),a=t("FeBl"),o=t("S82l");n.exports=function(n,e){var t=(a.Object||{})[n]||Object[n],i={};i[n]=e(t),r(r.S+r.F*o(function(){t(1)}),"Object",i)}}});