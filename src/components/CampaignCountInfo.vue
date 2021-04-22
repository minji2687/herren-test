<template>
  <div class="info__list">
      <dl class="item__info__wrap">
        <dt class="item__info__title">진행중인 캠페인</dt>
        <dd class="item__info__count">{{countInfo.proceedingCampaign}}개</dd>
      </dl>
      <dl class="item__info__wrap">
        <dt class="item__info__title">완료된 캠페인</dt>
        <dd class="item__info__count">{{countInfo.completedCampaign}}개</dd>
      </dl>
      <dl class="item__info__wrap">
        <dt class="item__info__title">등록 콘텐츠</dt>
        <dd class="item__info__count">{{countInfo.registeredContent}}개</dd>
      </dl>
      <dl class="item__info__wrap">
        <dt class="item__info__title">선발 인플루언서</dt>
        <dd class="item__info__count">{{countInfo.selectionInfluencer}}명</dd>
      </dl>
      <dl class="item__info__wrap">
        <dt class="item__info__title">보고서</dt>
        <dd class="item__info__count">{{countInfo.report}}개</dd>
      </dl>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    computed:mapState(["countInfo"]),
    created(){
    this.$store.dispatch('getData');
  }
}
</script>

<style lang="scss">

.info__list{
   display:flex;
    dl{
       width: 184px;
        height: 100px;
        margin: 50px 15px 30px 5px;
        padding: 20px;
        background-color: #fbfbfb;
         font-family: NotoSansCJKkr;
      dt{
          width: 94px;
          height: 20px;
          margin: 0 22px 13px 0;
          font-size: 14px;
          font-weight: bold;
          color: #141415;
      }
      dd{
        font-size: 18px;
        font-weight: bold;
        text-align: right;
        color: #f93c47;
      }
   }
 }

</style>
 

