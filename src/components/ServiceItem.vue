<template>
  <div class="service-item">
    <div 
      class="background-image" 
      :style="{ backgroundImage: `url(${backgroundImage})` }"
      @touchstart="scaleImage(true)"
      @touchend="scaleImage(false)"
      @mouseenter="scaleImage(true)"
      @mouseleave="scaleImage(false)"
      ref="backgroundImage"
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
  methods: {
    scaleImage(isScaling) {
      const imageElement = this.$refs.backgroundImage;
      imageElement.style.transform = isScaling ? 'scale(1.55)' : 'scale(1)';
    },
  },
};
</script>



<style scoped>
.service-item {
  display: flex;
  gap: 10px;
  align-items: center;
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
  transition: transform 0.5s ease;
}

.description {
  flex: 1;
  word-wrap: break-word; 
}
</style>

