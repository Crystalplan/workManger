webpackJsonp([23],{Y7vv:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getClassTeacher=function(e){return Object(t.a)({url:"/api/classTeacher",method:"get",params:{page:e}})},a.getClassTeacherById=function(e){return Object(t.a)({url:"/api/classTeacher/"+e,method:"get"})},a.updateClassTeacherInfo=function(e,a){return Object(t.a)({url:"/api/classTeacher/"+e,method:"patch",data:{session_id:a.session_id,teacher_id:a.teacher_id,class:a.class,grade:a.grade,remark:a.remark}})},a.addNewClassTeacher=function(e){return Object(t.a)({url:"/api/classTeacher",method:"post",data:e})},a.deleteClassTeacherById=function(e){return Object(t.a)({url:"/api/classTeacher/"+e,method:"delete"})};var t=r("Vo7i")}});