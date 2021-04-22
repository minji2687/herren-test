<template>
  <div class="page_navigation">
      <a href="#" class="prev_page arrow"><img src="../assets/page-arrow-l.svg" alt="인스타그램"></a>
      <span class="paging_numbers">
          <a href="#" class="page_num current_page">1</a>
          <a href="#" class="page_num">2</a>
          <a href="#" class="page_num">3</a>
          <a href="#" class="page_num">4</a>
          <a href="#" class="page_num">5</a>
      </span>
      <a href="#" class="next_page arrow"><img src="../assets/page-arrow-r.svg" alt="인스타그램"></a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .page_navigation{
    width: 280px;
    height: 24px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:41px;
    .arrow{
      flex:2;
      &.next_page{
        text-align: right;
      }
    }
    .paging_numbers{
        flex:7;
        display:flex;
        justify-content: space-between;
    .page_num{
          display:inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display:flex;
          justify-content: center;
          align-items: center;
          color:#fff;
          text-decoration: none;
          background-color: #c7c7c7;
          font-family: NotoSansCJKkr;
          font-size: 10px;
          font-weight: bold;
          &.current_page{
          background-color: #000;
          }
        }
    }
    
  }
</style>