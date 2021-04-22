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
          <td>
            <span v-if='campaignItem.type==="INSTAGRAM"' class="insgram icon"><img src="../assets/ic-insta.svg" alt="인스타그램"></span>
            <span v-else-if='campaignItem.type==="BLOG"' class="blog icon"><img src="../assets/ic-blog.svg" alt="블로그"></span>
            {{campaignItem.type}}
          </td>
          <td><button type="button" class="selection__button">선발하기</button></td>
          <td>{{campaignItem.recruitmentCount}}</td>
          <td><button type="button" class="content__confirm__button">확인</button></td>
          <td><button type="button" class="report__button">확인</button></td>
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
     this.campaignInfo =  response.responseData
   }
  },
  created(){
    this.getData()
  }
}
</script>

<style lang="scss">
table{
  display:flex;
  flex-direction: column;
  thead{
    tr{
      height:60px;
    }
  }
  tr{
    height:100px;
    display:flex;
    border-bottom:1px solid #e5e5e5;
    text-align: left;
    td{
      display:flex;
      align-items: center;
      button{
        width: 80px;
        height: 40px;
        border-radius: 2px;
        border:none;
        background:white;
        border: solid 1px #e5e5e5;
        color:black;
        cursor: pointer;
        &.selection__button{
          background: black;
          color:white;
          border:none;
        }
      }
      .icon{
          padding-right:1rem;
        }
    }
    th{
      display:flex;
      font-size: 14px;
      align-items: center;
      border-top:1px solid black;
      border-bottom:1px solid black;
    }
   
    th:nth-child(1),td:nth-child(1){
      flex: 5;
    }
    th:nth-child(2),td:nth-child(2){
      flex: 3;
    }
    th:nth-child(3),td:nth-child(3){
      flex: 2;
    }
    th:nth-child(3){
      padding-left:16px;
    }
    th:nth-child(4),td:nth-child(4){
      display:flex;
      justify-content: center;
      flex: 2;
    }
    th:nth-child(5), td:nth-child(5){
      display:flex;
      justify-content: center;
      flex: 2;
    }
    th:nth-child(6), td:nth-child(6){
      display:flex;
      justify-content: center;
      flex: 2;
    } 
    th:nth-child(6){
      justify-content:center;
    }
    
  }
  
  
}
</style>
