<script>
import HeaderNav from './components/HeaderNav.vue';
export default {
  components: {
    HeaderNav
  }
}
</script>

<template>
  <h1>Stanavich Remodeling</h1>
  <div id="stanavich-remodeling">
<div class="content">
  <HeaderNav/>

  <router-view/>
</div>
  </div>
</template>

<style scoped>

</style>
