<template> 
  <div>
    <section class="content-section">
      <h2>Exterior Services</h2>
      <p>Broad Description of exterior services</p>
    </section>

    <section class="services-grid">
      <service-item
        v-for="(item, index) in exteriorServiceItems"
        :key="index"
        :backgroundImage="item.backgroundImage"
        :description="item.description"
      />
    </section>
  </div>
</template>

<script>
import ServiceItem from '../components/ServiceItem.vue';

export default {
  name: 'EnteriorPage',
  components: {
    ServiceItem,
  },
  data() {
    return {
      exteriorServiceItems: [
        { backgroundImage: './assets/images/remodel7.jpg', description: 'Description 1' },
        { backgroundImage: './assets/images/remodel8.jpg', description: 'Description 2' },
        { backgroundImage: './assets/images/remodel14.jpg', description: 'Description 3' },
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
  overflow-x: hidden; 
}

.service-item {
  display: flex;
  gap: 10px;
  align-items: center;
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
  transition: transform 0.3s ease;
}
</style>