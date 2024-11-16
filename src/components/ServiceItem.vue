<template>
  <div class="service-item">
    <div 
      class="background-image" 
      :style="{
        backgroundImage: `url(${backgroundImage})`,
        transform: isScaled ? 'scale(1.9) translateX(70px)' : 'scale(1) translateX(0)', 
        transition: 'transform 0.3s ease',  
      }"
      @click="toggleScale"
    ></div>
    <div class="description">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    backgroundImage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isScaled: false, 
    };
  },
  methods: {
    toggleScale() {
      this.isScaled = !this.isScaled;
    },
  },
};
</script>

<style scoped>
.service-item {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center; 
  max-width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.background-image {
  width: 150px;
  height: 100px;
  background-size: cover;
  background-position: center;
  cursor: pointer; 
}

.description {
  flex: 1;
  word-wrap: break-word;
}
</style>
