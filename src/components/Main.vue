<template>
  <div class="hello">
    <!-- <h1>nssliu</h1> -->
    <h1>General Project Control</h1>
    <el-divider></el-divider>
    <div style="height: 300px;">
      <el-steps direction="vertical" :active="1">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
    </div>
    
    <el-divider></el-divider>
    <jin-du></jin-du>
    <el-divider></el-divider>
    
   
   <el-button type="primary" icon="el-icon-edit" @click="addFlow">添加流程</el-button>
   <el-button type="primary" icon="el-icon-share" @click="addApp">添加应用</el-button>
   <el-button type="primary" icon="el-icon-delete" @click="queryAllFlow">查询所有流程</el-button>
   <el-button type="primary" icon="el-icon-search" @click="queryAllBatApp">查询所有batApp</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
     -->
    <!-- <el-divider></el-divider>
    <el-button v-for="(item,i) in appList" type="primary" icon="el-icon-share" @click="startTwo(i)">{{item.name}}</el-button>
    <el-divider></el-divider> -->
   <!--  <el-button type="primary" @click="muleBak">恢复mulebak<i class="el-icon-upload el-icon--right"></i></el-button> -->
    
    <el-divider></el-divider>
    
    <table-s></table-s>
    <el-divider></el-divider>

    <el-divider></el-divider>
     <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
    <el-divider></el-divider>
    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
    
    <!-- <add-flow-body></add-flow-body> -->
    <!-- <el-divider></el-divider>
    
    <el-divider></el-divider>
    
    <el-divider></el-divider> -->

  </div>
</template>

<script>
let appconfig = APPCONFIG;

import JinDu from './child/JinDu.vue'
import TableS from './child/TableS.vue'
export default {
  name: 'Main',
  components:{JinDu,TableS},
  data () {
    return {
      appList:appconfig.apps,
      appStartFlag: false
    }
  },
  mounted() {
    //EventBus.$on('thAnalysis', this.init);
  },
  destroyed() {
    //EventBus.$off('thAnalysis', this.init);
  },
  methods: {
    drag(){
        alert();
    },
    queryAllBatApp(){
      let that = this;
      let appListParam = {index:1};
      that.sendAjax(appconfig.appVT.queryAllBatAppUrl,appListParam,
        function(ret){
          console.log(ret);
      },function(ret){
        alert("error");
      });
    },
    
    queryAllFlow(){
      let that = this;
      let appListParam = {req:1};
      that.sendAjax(appconfig.appVT.queryAllFlowUrl,appListParam,
        function(ret){
          console.log(ret);
      },function(ret){
        alert("error");
      });
    },
    addApp(){
      let that = this;
      let appListParam={
        index:1,
        basePath:"D:\\",
        name:"nssliu",
        ip:"192.168.0.223",
        port:8726,
        attemptLimit:15
      }
      that.sendAjax(appconfig.appVT.addAppUrl,appListParam,
        function(ret){
          alert(ret);
      },function(ret){
        alert("error");
      });
    },
    addFlow(){
      let that = this;
      let appListParam=[
      {
        index:1,
        basePath:"D:\\",
        name:"nssliu",
        ip:"192.168.0.223",
        port:8726,
        attemptLimit:15
      },{
        index:2,
        basePath:"D:\\",
        name:"nssliu",
        ip:"192.168.0.223",
        port:8726,
        attemptLimit:15
      }]
      that.sendAjax(appconfig.appVT.addFlowUrl,appListParam,
        function(ret){
          alert(ret);
      },function(ret){
        alert("error");
      });

    },
    deleteLogLoopCancel(){
      let that = this;
      let param = {
        "sourceFilePath":appconfig.iserverLogLoop.paths
      }
      //param = JSON.stringify(param);
      that.sendAjax(appconfig.iserverLogLoopCancel.url,param,
        function(ret){
          alert(ret);
      },function(ret){
        alert("error");
      });
    },
    deleteLogLoop(){
      let that = this;
      let param = {
        "sourceFilePath":appconfig.iserverLogLoop.paths
      }
      //param = JSON.stringify(param);
      that.sendAjax(appconfig.iserverLogLoop.url,param,
        function(ret){
          alert(ret);
      },function(ret){
        alert("error");
      });
    },
    deleteLog(){
      alert(1);
      /*let that = this;
      let param = {
        "sourceFilePath":appconfig.iserverLog.paths
      }
      //param = JSON.stringify(param);
      that.sendAjax(appconfig.iserverLog.url,param,
        function(ret){
          alert(ret);
      },function(ret){
        alert("error");
      });*/
    },
    muleBak(){
      let that = this;
      /*let param = {
        "sourceFilePath":encodeURIComponent(appconfig.muleFileBak.sourceFilePath),
        "newFilePath":encodeURIComponent(appconfig.muleFileBak.newFilePath)
      }*/
      let param = {
        "sourceFilePath":appconfig.muleFileBak.sourceFilePath,
        "newFilePath":appconfig.muleFileBak.newFilePath
      }
      //param = JSON.stringify(param);
      that.sendAjax(appconfig.muleFileBak.url,param,
        function(ret){
          alert(ret);
      },function(ret){
        alert("error");
      });
    },
    startTwo(index){
      let that = this;
      let datas = that.appList[index];
      datas = JSON.stringify(datas);
      $.ajax({
          type:"POST",
          url: appconfig.oneUrl,
          contentType: "application/json; charset=utf-8", //如果提交的是json数据类型，则必须有此参数,表示提交的数据类型 
          //dataType: "json", //表示返回值类型，不必须           
          data: datas,  
          success: function (jsonResult) {                  
              //在原来的页面跳转到下载word模板的页面
              //window.location.href = "/InviteBid/ExportTemplateFile";
              alert(jsonResult);
          },
          error: function (data){
              alert("打开app失败");
          }
      }); 
    },
    startOne(){
      let that = this;
      let datas = {"basePath":"E:/supermap/softbag/supermap_platform/快捷启动/",
                    "name":"1-Activemq.bat",
                    "ip":"127.0.0.1",
                    "port":"8161",
                    "attemptLimit":"10"};
                    datas = JSON.stringify(datas);
      $.ajax({
          type:"POST",
          url: appconfig.oneUrl,
          contentType: "application/json; charset=utf-8", //如果提交的是json数据类型，则必须有此参数,表示提交的数据类型 
          //dataType: "json", //表示返回值类型，不必须           
          data: datas,  
          success: function (jsonResult) {                  
              //在原来的页面跳转到下载word模板的页面
              //window.location.href = "/InviteBid/ExportTemplateFile";
              alert(jsonResult);
          },
          error: function (data){
              alert("打开app失败");
          }
      }); 
    },
    startApp(){
      let that = this;
      that.appStartFlag = true;
      $.ajax({
          type:"POST",
          url: appconfig.url,
          contentType: "application/json", //如果提交的是json数据类型，则必须有此参数,表示提交的数据类型 
          //dataType: "json", //表示返回值类型，不必须           
          //data: ,  
          success: function (jsonResult) {                  
              //在原来的页面跳转到下载word模板的页面
              //window.location.href = "/InviteBid/ExportTemplateFile";
              that.appStartFlag = false;
              alert(jsonResult);
          },
          error: function (data){
              alert("打开app失败");
              that.appStartFlag = false;
          }
      });    
    },
    sendAjax(url,param,succFun,errFun){
      let that = this;
      $.ajax({
          type:"POST",
          url: url,
          contentType: "application/json; charset=utf-8", //如果提交的是json数据类型，则必须有此参数,表示提交的数据类型 
          //dataType: "json", //表示返回值类型，不必须           
          data: JSON.stringify(param),  
          success: succFun,
          error: errFun
      }); 
    },
    init(tab) {


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
