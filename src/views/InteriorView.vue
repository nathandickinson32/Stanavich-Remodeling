<template>
  <div>
    <section class="content-section">
      <h2>Interior Services</h2>
      <p>Broad Description of interior services</p>
    </section>

    <section class="services-grid">
      <service-item
        v-for="(item, index) in interiorServiceItems"
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
  name: 'InteriorPage',
  components: {
    ServiceItem,
  },
  data() {
    return {
      interiorServiceItems: [
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
  padding: 0 20px;
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

.background-image:hover {
  transform: scale(1.05);
}

.description {
  flex: 1;
}
</style>
