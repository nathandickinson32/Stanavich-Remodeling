<template>
    <header class="header">
      <div :class="['off-screen-menu', isMenuOpen ? 'active' : '']">
        <label id="profile"></label>
        <ul class="list">
          <li>
            <router-link class="home-btn" to="/stanavich-remodeling" @click="closeMenu">Home</router-link><br />
            <router-link class="gallery-btn" to="/stanavich-remodeling/about" @click="closeMenu">About</router-link><br />
            <router-link class="interior-btn" to="/stanavich-remodeling/interior" @click="closeMenu">Interior</router-link><br />
            <router-link class="gallery-btn" to="/stanavich-remodeling/exterior" @click="closeMenu">Exterior</router-link><br />
            <router-link class="gallery-btn" to="/stanavich-remodeling/gallery" @click="closeMenu">Gallery</router-link>

          </li>
        </ul>
      </div>
    
      <nav class="ham-menu-container">
        <div :class="['ham-menu', isMenuOpen ? 'active' : '']" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px; 
    display: flex;
    align-items: center;
    z-index: 1000;
    margin-left: 20px;
  }
  
  .ham-menu-container {
    display: flex;
    justify-content: flex-start; 
    width: 100%;
  }
  
  .off-screen-menu {
    z-index: 100;
    background-color: lightblue;
    height: 100vh;
    width: 100%;
    max-width: 400px;
    position: fixed;
    top: 0;
    right: -450px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    transition: 0.7s ease;
  }
  
  .off-screen-menu.active {
    left: 0;
  }
  
  .ham-menu {
    display: flex;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: relative;
  }
  
  .ham-menu span {
    z-index: 100;
    height: 5px;
    width: 100%;
    background-color: black;
    border-radius: 25px;
    position: absolute;
    transition: all 0.5s ease; 
  }
  
  .ham-menu span:nth-child(1) {
    top: 25%;
  }
  
  .ham-menu span:nth-child(2) {
    top: 50%;
  }
  
  .ham-menu span:nth-child(3) {
    top: 75%;
  }
  
  .ham-menu.active span:nth-child(1) {
    top: 50%;
    transform: rotate(45deg); 
  }
  
  .ham-menu.active span:nth-child(2) {
    opacity: 0;
  }
  
  .ham-menu.active span:nth-child(3) {
    top: 50%;
    transform: rotate(-45deg); 
  }
  
  .list {
    list-style: none;
  }
  </style>
  