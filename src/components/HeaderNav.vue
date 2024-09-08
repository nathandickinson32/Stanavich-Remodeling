<template>
  <div class="sidebar">
    <div class="off-screen-menu">
        <label id="profile"></label>
        <ul class="list">
            <li>
                <router-link class="home-btn" to="/stanavich-remodeling" @click="closeMenu">Home</router-link>
                <router-link class="gallery-btn" to="/stanavich-remodeling/gallery" @click="closeMenu">Gallery</router-link>
                <router-link class="interior-btn" to="/stanavich-remodeling/interior" @click="closeMenu">Interior</router-link>

            </li>
        </ul>
    </div>
    <nav>
        <div class="ham-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    mounted() {
        const hamMenu = document.querySelector('.hame-menu');
        const offScreenMenu = document.querySelector('.off-screen-menu');

        hamMenu.addEventListener('click', ()=> {
            hamMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active')
        })
    },
    methods: {
        closeMenu() {
            this.isMenuOpen=false;
            const hamMenu = document.querySelector('.ham-menu');
            const offScreenMenu = document.querySelector('.off-screen-menu');
            hamMenu.classList.remove('active');
            offScreenMenu.classList.remove('active')
        }
    }

}
</script>

<style scoped>
.side-bar {
    width: 60px;
    height: 120px;
    background-color: blue;
    color: white;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -5px;
    border-radius: 10px;
}
.sidebar nav ul li {
    width: 100%;
    margin: 20px 0; 
    justify-content: center;
}
.sidebar nav ul li a{
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px; 
}
.sidebar nav ul li a image{
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.off-screen-menu{
    z-index: 100;
    height: 100vh;
    width: 100%;
    max-width: 400px;
    position: fixed;
    top: 50px;
    right: -450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    font-size: 2.5rem;
    transition: .7s ease;
    border-radius: 10px;
}
.off-screen-menu.active{
left: 0;
}
.ham-menu {
    display: flex;
    height: 50px;
    width:50px;
    position: relative;
    top: -25px;
    cursor: pointer;
    margin-left: 20px;
    
}
.ham-menu span{
    z-index: 100;
    height: 5px;
    width: 100%;
    background-color: black;
    border-radius: 25px;
    position: absolute;
    top: 50%;
    right: 20%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    transition: .7s ease;
}
.ham-menu span:nth-child(1){
    top:25%;
}
.ham-menu span:nth-child(3){
    top:75%;
}
.ham-menu.active span:nth-child(1){
    top:50%;
    transform: translate(50%, -50%) rotate(90deg);
}
.ham-menu.active span:nth-child(2){
 opacity: 0;
}
.ham-menu.active span:nth-child(3){
    top:50%;
    transform: translate(50%, -50%) rotate(90deg);
}
.list{
    list-style: none;
}
</style>