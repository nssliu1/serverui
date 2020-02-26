<template>
  <div class="wid">
    <el-steps :active="active" finish-status="success">
      <el-step title="创建属性"></el-step>
      <el-step title="导出类"></el-step>
      <el-step title="生成数据"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
let appconfig = APPCONFIG;
  export default {
    name:'jindu',
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
<style scoped>
.wid{
  width: 300px;
}
</style>