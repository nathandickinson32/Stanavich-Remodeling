<script>
import HeaderNav from './components/HeaderNav.vue';
import FooterNav from './components/FooterNav.vue';

export default {
  components: {
    HeaderNav,
    FooterNav
  }
}
</script>

<template>
  <div class="app-container">
    <div class="header-content">
      <HeaderNav />
    </div>

    <div class="router-view">
      <router-view />
    </div>

    <div class="footer">
      <FooterNav />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

.router-view {
  flex: 1;
}

.footer {
  position: relative;
  z-index: 20;
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
  text-align: center;
}
</style>
