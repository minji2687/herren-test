<template>
 <div class="admin">
    <table>
      <thead>
        <tr>
          <th>캠페인</th>
          <th>캠페인 유형</th>
          <th>인플루언서</th>
          <th>모집</th>
          <th>등록 콘텐츠</th>
          <th>보고서</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="campaignItem in campaignInfo" v-bind:key="campaignItem.title">
          <td>{{campaignItem.title}}</td>
          <td>{{campaignItem.type}}</td>
          <td>인플루언서</td>
          <td>{{campaignItem.recruitmentCount}}</td>
          <td>등록 콘텐츠</td>
          <td>보고서</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {fetchCampaignInfo} from "../api/index.js"

export default {
  data(){
    return{
      campaignInfo:[]
    }
  },
  methods:{
   async getData(){
     let response = await fetchCampaignInfo()
     console.log(response)
     this.campaignInfo =  response.responseData
   }
  },
  created(){
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
