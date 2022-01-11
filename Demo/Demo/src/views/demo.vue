<template>
  <div id="demo">
    <div class="header">
      <div class="head-pad">
        <div class="head-left">
          <i></i>
        </div>
        <div class="head-center">
          <i></i>
          <input
            type="text"
            class="txt-search"
            placeholder="请输入身份证号"
            v-model="searchText"
          />
        </div>
        <div class="head-right">
          <div @click="search()">查询</div>
        </div>
      </div>
    </div>
    <div class="peisinfo">
      <table>
        <tr>
          <td>序号</td>
          <td>体检编号</td>
          <td>姓名</td>
          <td>身份证号</td>
          <td>性别</td>
          <td>年龄</td>
          <td>婚姻状况</td>
          <td>联系方式</td>
          <td>民族</td>
          <td>国家</td>
        </tr>
        <tr v-for="peis in peisinfo" :key="peis.id">
          <td>{{ peis.ID }}</td>
          <td>{{ peis.PeisCode }}</td>
          <td>{{ peis.Name }}</td>
          <td>{{ peis.CardCode }}</td>
          <td>{{ peis.Sex }}</td>
          <td>{{ peis.Age }}</td>
          <td>{{ peis.Marital }}</td>
          <td>{{ peis.Telephone }}</td>
          <td>{{ peis.Nation }}</td>
          <td>{{ peis.Nationality }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
/* eslint-disable */
<script>
import axios from "axios";

export default {
  data() {
    return {
      peisinfo: [],
      searchText: "",
    };
  },
  mounted() {
    this.getpeisinfo();
  },
  methods: {
    getpeisinfo() {
      var that = this;
      var baseUrl = window.g.baseUrl;
      axios({
        method: "get",
        url: baseUrl + "/TP_TJ_Peis/GetPeisInfo",
      }).then(function (res) {
        that.peisinfo = res.data;
        console.log(that.peisinfo);
      });
    },
    search() {
      var that = this;
      var baseUrl = window.g.baseUrl;
      axios({
        method: "get",
        url: baseUrl + "/TP_TJ_Peis/Search",
        params: { CardCode: this.searchText },
      }).then((res) => {
        that.peisinfo = res.data;
        console.log(that.peisinfo);
      });
    },
  },
};
</script>

<style>
</style>
