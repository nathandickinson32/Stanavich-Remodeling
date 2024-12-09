<template>
  <div class="gallery-container">
    <div class="filter-bar">
      <button
        v-for="category in categories"
        :key="category"
        @click="filterType = category"
        :class="{ active: filterType === category }"
      >
        {{ category }}
      </button>
    </div>

    <div class="image-grid">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="before-after-card"
      >
        <div class="image-wrapper">
          <img :src="project.beforeImage" :alt="`${project.title} Before`" />
          <div class="label">Before</div>
        </div>
        <div class="image-wrapper">
          <img :src="project.afterImage" :alt="`${project.title} After`" />
          <div class="label">After</div>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Modern Kitchen",
          description: "Brief Description",
          beforeImage: "assets/images/remodel1.jpg",
          afterImage: "assets/images/remodel2.jpg",
          category: "Kitchens",
        },
        {
          id: 2,
          title: "Modern Living Room",
          description: "Brief Description",
          beforeImage: "assets/images/remodel3.jpg",
          afterImage: "assets/images/remodel4.jpg",
          category: "Living Rooms",
        },
        {
          id: 3,
          title: "Luxurios Bathroom",
          description: "Brief Description",
          beforeImage: "assets/images/remodel5.jpg",
          afterImage: "assets/images/remodel6.jpg",
          category: "Bathrooms",
        },
      ],
      filterType: "All",
    };
  },
  computed: {
    filteredProjects() {
      if (this.filterType === "All") {
        return this.projects;
      }
      return this.projects.filter(
        (project) => project.category === this.filterType
      );
    },
    categories() {
      const uniqueCategories = new Set(
        this.projects.map((project) => project.category)
      );
      return ["All", ...uniqueCategories];
    },
  },
};
</script>

<style scoped>
.gallery-container {
    padding: 20px;
    padding-top: 80px;
    max-width: 1200px;
    margin: 0 auto;
}

.filter-bar{
    text-align: center;
    margin-bottom: 20px;
}

.filter-bar button {
background: #eee;
border: none;
padding: 10px 20px;
margin: 5px;
cursor: pointer;
border-radius: 5px;
transition: 0.3 ease;
}

.filter-bar button.active {
    background : #007bff;
    color: #fff;

}

.image-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.before-after-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}

.image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
}

.label {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0,0,0,0.6);
    color: #fff;
    padding: 5px 10px;
    font-size: 0.9rem;
}

h3 {
    margin: 10px 0 5px;
    font-size: 1.2rem;
}
p {
    margin: 0;
    color: #555;
    font-size: 1rem;
}



</style>