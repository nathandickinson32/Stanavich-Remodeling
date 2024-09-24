<template>
  <div class="content">
    <div class="myCarousel">
        <transition name="fade">
          <img :src="randomImage1" class="top-right-image" :key="randomIndex1" />
        </transition>
    </div>
  </div>
</template>

<script>
import fiencee2 from '../assets/images/fiencee2.jpg'
import cleBugImage from '../assets/images/cleBug.jpg'
import meMowImage from '../assets/images/me&mow.jpg'
export default {
data(){
    return{
        randomIndex1: 0,
intervalId: null,
images: [
        // fiencee2,
        // cleBugImage,
        // meMowImage

        
      ],
    }
},
computed: {
    randomImage1() {
      return this.images[this.randomIndex1];
    },
},
mounted(){
    this.intervalId = setInterval(() => {
      this.randomIndex1 = Math.floor(Math.random() * this.images.length);
    
    }, 5000); 
}
}
</script>

<style>

</style>