webpackJsonp([22],{"qI/l":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(d.a)({url:"/api/leader",method:"get",params:{pageSize:a,page:t,session_id:e.session_id,teacher_id:e.teacher_id,leader_type:e.leader_type}})},t.getInfoById=function(e){return Object(d.a)({url:"/api/leader/"+e,method:"get"})},t.updateInfo=function(e,t){return Object(d.a)({url:"/api/leader/"+e,method:"patch",data:{teacher_id:t.teacher_id,leader_type:t.leader_type,job:t.job,remark:t.remark}})},t.addInfo=function(e){return Object(d.a)({url:"/api/leader",method:"post",data:e})},t.deleteInfoById=function(e){return Object(d.a)({url:"/api/leader/"+e,method:"delete"})},t.uploadFile=function(e){return Object(d.a)({url:"/api/leader/upload",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})},t.exportCurrentPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(d.a)({url:"/api/leader/export",method:"post",data:{page:t,pageSize:e,session_id:a.session_id,teacher_id:a.teacher_id,leader_type:a.leader_type}})},t.exportAll=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(d.a)({url:"/api/leader/exportAll",method:"post",data:{session_id:e.session_id,teacher_id:e.teacher_id,leader_type:e.leader_type}})},t.Model=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this.session_id=e,this.teacher_id=t,this.leader_type=a,this.job=d,this.remark=r},t.SearchModel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.session_id=e,this.teacher_id=t,this.leader_type=a};var d=a("Vo7i")}});