<script>
import HeaderNav from './components/HeaderNav.vue';
import FooterNav from './components/FooterNav.vue';
export default {
  components: {
    HeaderNav, FooterNav
  }
}
</script>

<template>
  <!-- <h1>Stanavich Remodeling</h1> -->
  <div class="content">


  <div>
      <HeaderNav/>    

    </div>

    <br/><br/>

</div>
<div class="router-view">
  <router-view/>

</div>
<br/>
  <div class="footer">
    <footer-nav/>
  </div>
</template>

<style scoped>


.content {
  display: flex;
  flex-direction: column; 
  align-items: center;
}
</style>
