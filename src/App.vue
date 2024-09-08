<script>
import HeaderNav from './components/HeaderNav.vue';
export default {
  components: {
    HeaderNav
  }
}
</script>

<template>
  <!-- <h1>Stanavich Remodeling</h1> -->
  <div class="content">


  <div>
      <HeaderNav/>    

    </div>
    <h1 class="title">Stanavich Remodeling & Repairs</h1>

    <br/><br/>

</div>
<router-view/>

  
</template>

<style scoped>
.title{
  text-align: center;
}
.content {
  display: flex;
  justify-content: center;
  margin: 0 5% 0px 5%;
}

</style>
