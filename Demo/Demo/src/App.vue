<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-1 col-xs-8">
        <div class="page-header"><h2>通用数据查询系统</h2></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-1">
        <div class="list-group">
          <router-link to="/demo" class="list-group-item">{{
            routername[0]
          }}</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="pannel">
          <div class="pannel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      routername: [],
    };
  },
  mounted() {
    this.getroutername();
  },
  methods: {
    getroutername() {
      var that = this;
      var baseUrl = window.g.baseUrl;
      axios({
        method: "get",
        url: baseUrl + "/TP_TJ_Peis/routername",
      }).then(function (res) {
        that.routername = res.data;
        console.log(that.routername);
      });
    },
  },
};
</script>

<style>
</style>
