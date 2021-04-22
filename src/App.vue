<template>
  <div id="app">
    <h1>캠페인 관리</h1>
    <CampaignCountInfo/>
    <CampaignInfo/>
    <PagingNav/>
  </div>
</template>

<script>
import CampaignInfo from './components/CampaignInfo.vue'
import CampaignCountInfo from './components/CampaignCountInfo.vue'
import PagingNav from './components/PagingNav.vue'

export default {
  name: 'App',
  components: {
    CampaignInfo,
    CampaignCountInfo,
    PagingNav
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
#app {
  width: 1060px;
  margin: 0 auto;
  padding: 69px 40px 101px;
  h1{
     font-family: NotoSansCJKkr;
  font-size: 40px;
  font-weight: bold;
  color: #141415;
  }
}
</style>
