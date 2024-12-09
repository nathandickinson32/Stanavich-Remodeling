<template>
  <div class="homepage">
   

    <div class="carousel-container">
      <transition name="fade">
        <img :src="randomImage1" class="carousel-image" :key="randomIndex1" />
      </transition>
    </div>

    <section class="referrals">
      <h2>What are others saying about me?</h2>
      <div class="review-card" v-for="(review, index) in reviews" :key="index">
        <h3>{{ review.name }}</h3>
        <p class="location">{{ review.location }}</p>
        <p class="review-text">{{ review.text }}</p>
      </div>
    </section>

  
  </div>
</template>

<script>
import remodel1 from "/assets/images/remodel1.jpg";
import remodel2 from "/assets/images/remodel2.jpg";
import remodel3 from "/assets/images/remodel3.jpg";
import remodel4 from "/assets/images/remodel4.jpg";
import remodel5 from "/assets/images/remodel5.jpg";
import remodel6 from "/assets/images/remodel6.jpg";
import remodel7 from "/assets/images/remodel7.jpg";
import remodel8 from "/assets/images/remodel8.jpg";
import remodel9 from "/assets/images/remodel9.jpg";
import remodel10 from "/assets/images/remodel10.jpg";
import remodel11 from "/assets/images/remodel11.jpg";
import remodel12 from "/assets/images/remodel12.jpg";
import remodel13 from "/assets/images/remodel13.jpg";
import remodel14 from "/assets/images/remodel14.jpg";
import remodel15 from "/assets/images/remodel15.jpg";
import remodel16 from "/assets/images/remodel16.jpg";


export default {
  data() {
    return {
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
        remodel14,
        remodel15,
        remodel16,


      ],
      reviews: [
        { name: "John Doe", location: "New York, NY", text: "Great job!" },
        { name: "Jane Smith", location: "Los Angeles, CA", text: "Highly recommended!" },
        { name: "Alice Brown", location: "Chicago, IL", text: "Amazing service!" },
      ],
    };
  },
  computed: {
    randomImage1() {
      return this.images[this.randomIndex1];
    },
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.randomIndex1 = Math.floor(Math.random() * this.images.length);
    }, 5000);
  },
};
</script>

<style scoped>
.homepage {
  text-align: center;
  color: white;
  background-color: #1a1a1a;
  padding: 20px 0;
}

.carousel-container {
  width: 100%;
  height: 85vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}

.carousel-image {
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
}
.referrals {
  padding: 20px;
  background-color: #222;
  text-align: center;
  box-sizing: border-box;
}

.referrals h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.review-card {
  margin: 10px auto;
  padding: 15px;
  background-color: #333;
  border-radius: 5px;
  width: 90%;
  max-width: 600px; 
  box-sizing: border-box; 
}
.review-card h3 {
  margin: 0;
  font-size: 18px;
}

.review-card .location {
  font-size: 14px;
  color: #aaa;
}
.review-card .review-text {
  font-size: 16px;
  margin-top: 5px;
}

@media (max-width: 800px){
  .carousel-container {
  width: 100%;
  height: 50vh;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
}
</style>
