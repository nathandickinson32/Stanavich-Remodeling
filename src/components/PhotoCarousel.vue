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
 import remodel1 from '../assets/images/remodel1.jpg'
 import remodel2 from '../assets/images/remodel2.jpg'
 import remodel3 from '../assets/images/remodel3.jpg'
 import remodel4 from '../assets/images/remodel4.jpg'
 import remodel5 from '../assets/images/remodel5.jpg'
 import remodel6 from '../assets/images/remodel6.jpg'
 import remodel7 from '../assets/images/remodel7.jpg'
 import remodel8 from '../assets/images/remodel8.jpg'
 import remodel9 from '../assets/images/remodel9.jpg'
 import remodel10 from '../assets/images/remodel10.jpg'
 import remodel11 from '../assets/images/remodel11.jpg'
 import remodel12 from '../assets/images/remodel12.jpg'
 import remodel13 from '../assets/images/remodel13.jpg'
 import remodel15 from '../assets/images/remodel15.jpg'
 import remodel16 from '../assets/images/remodel16.jpg'


  export default {
  data(){
      return{
          randomIndex1: 0,
  intervalId: null,
  images: [
       remodel1,
       remodel2,
       remodel3,
       remodel4,
       remodel5,
       remodel6,
       remodel7,
       remodel8,
       remodel9,
       remodel10,
       remodel11,
       remodel12,
       remodel13,
       remodel15,
       remodel16
          
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