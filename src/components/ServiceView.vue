<template>
    <div>
      <section class="content-section">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </section>
  
      <section class="services-grid">
        <service-item
          v-for="(item, index) in serviceItems"
          :key="index"
          :backgroundImage="item.backgroundImage"
          :description="item.description"
          @toggleScale="toggleScale(index)"
        />
      </section>
    </div>
  </template>
  
  <script>
  import ServiceItem from '../components/ServiceItem.vue';
  
  export default {
    name: 'ServiceView',
    components: {
      ServiceItem,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      serviceItems: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        scaledIndex: null,
      };
    },
    methods: {
      toggleScale(index) {
        this.scaledIndex = this.scaledIndex === index ? null : index;
      },
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
  </style>
  