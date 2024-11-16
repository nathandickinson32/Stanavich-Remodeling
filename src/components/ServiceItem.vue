<template>
  <div class="service-item">
    <div class="background-image" :style="{backgroundImage: `url(${backgroundImage})`}"></div>
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
      required: true
    },
    description: {
      type: String,
      required: true
    },
  }
}
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

.background-image:hover {
  transform: scale(1.55);
}

.description {
  flex: 1;
  word-wrap: break-word; 
}
</style>