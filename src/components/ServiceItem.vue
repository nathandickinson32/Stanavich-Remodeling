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
    }
  }
}
</script>

<style scoped>
.service-item{
    display: flex;
    gap: 10px;
    align-items: center;
}
.background-image{
    width: 150px;
    height: 100px;
    background-size: cover;
    background-position: center;
}
.description{
    flex: 1;
}
</style>