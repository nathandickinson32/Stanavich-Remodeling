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

export default {
  data() {
    return {
      randomIndex1: 0,
      intervalId: null,
      images: [
        remodel1,
        // Add other images here
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
}



/* Carousel styling */
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

/* Referrals styling */
.referrals {
  padding: 20px;
  background-color: #222;
}

.review-card {
  margin: 10px auto;
  padding: 15px;
  background-color: #333;
  border-radius: 5px;
  width: 80%;
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


</style>
