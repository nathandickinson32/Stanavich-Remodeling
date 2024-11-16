<template>
  <service-view
    title="Exterior Services"
    description="Broad Description of exterior services"
    :serviceItems="exteriorServiceItems"
  />
</template>

<script>
import ServiceView from '../components/ServiceView.vue';

export default {
  name: 'ExteriorPage',
  components: {
    ServiceView,
  },
  data() {
    return {
      exteriorServiceItems: [
        { backgroundImage: './assets/images/remodel1.jpg', description: 'Description 1' },
        { backgroundImage: './assets/images/remodel2.jpg', description: 'Description 2' },
        { backgroundImage: './assets/images/remodel3.jpg', description: 'Description 3' },
      ],
    };
  },
};
</script>

<style scoped>
.content-section {
  text-align: center;
  margin: 20px 0;
}

.services-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.service-item {
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.background-image {
  width: 150px;
  height: 100px;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}

.description {
  flex: 1;
  word-wrap: break-word;
}
</style>