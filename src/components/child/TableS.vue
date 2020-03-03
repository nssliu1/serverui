<template>
  <div class="">
    <el-transfer v-model="value" :data="data"></el-transfer>
    <el-button type="primary" icon="el-icon-edit" @click="removeColumn">确定</el-button>
    <el-button type="primary" icon="el-icon-edit" @click="downJava">导出java文件</el-button>
     <!-- <el-button type="primary" icon="el-icon-edit" @click="getAR">获取删除后的数据</el-button> -->
     <el-button type="primary" icon="el-icon-edit" @click="sync">同步es</el-button>
  </div>
</template>

<script>
let appconfig = APPCONFIG;
let tableName = 'smdtv_4'
  export default {
    name:'tables',
    data() {
      const generateData = _ => {
        this.loadData();
        /*const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;*/
      };
      return {
        columns:"",
        data: generateData(),
        value: []
      };
    },
    methods:{
      sync(){
        let that= this;
        let form = {"pullClassNme":tableName};
        //form = JSON.stringify(form);//不是实体接受不使用JSON.stringify转换
        that.sendAjax("get","http://127.0.0.1:8766/tableController/getdbdata",form,
        function(ret){

          console.log(ret);

        },function(ret){
          alert("error");
        });
      },
      /*getAR(){
        let that= this;
        let form = {"pullClassNme":"smdtv_2"};
        form = JSON.stringify(form);
        that.sendAjax("POST","http://127.0.0.1:8766/tableController/getdbdata",form,
        function(ret){

          console.log(ret);

        },function(ret){
          alert("error");
        });
      },*/
      downJava(){
        let that= this;
        let form = {};
        form = JSON.stringify(form);
        that.sendAjax("POST","http://127.0.0.1:8766/tableController/downTableEntity",form,
        function(ret){
      
          console.log(ret);

        },function(ret){
          alert("error");
        });
      },
      removeColumn(){
        let that = this;
        console.log(that.columns[that.value[0]]);
        let remclus = [];
        that.value.forEach(function(ins){
          remclus.push(that.columns[ins-1].column_name);
        });
        console.log(remclus);
        
        let form = remclus;//{"rtcs":remclus};
    
        form = JSON.stringify(form);
        that.sendAjax("POST","http://127.0.0.1:8766/tableController/removeTableColumn",form,
        function(ret){
    
          console.log(ret);

        },function(ret){
          alert("error");
        });
      },
      loadData(){
        let that = this;
        that.dialogFormVisible = false
        let form = {"tableName":tableName}
        let datas = [];
        that.sendAjax("get","http://127.0.0.1:8766/tableController/getAllTableColumn",form,
        function(ret){
          console.log(ret);
          that.columns = ret;
          //EventBus.$emit('queryAllLog',true);
          ret.forEach(function(de){
            datas.push({
              key: de.index,
              label: de.column_name//,
              //disabled: i % 4 === 0
            });
          });
          that.data = datas;
        },function(ret){
          alert("error");
        });

      },
      sendAjax(types,url,param,succFun,errFun){
        let that = this;
        $.ajax({
            type:types,
            url: url,
            contentType: "application/json; charset=utf-8", //如果提交的是json数据类型，则必须有此参数,表示提交的数据类型 
            //dataType: "json", //表示返回值类型，不必须           
            data: param,//JSON.stringify(param),  
            traditional:true,
            success: succFun,
            error: errFun
      }); 
      }
    }
  };
</script>
<style scoped>

</style>