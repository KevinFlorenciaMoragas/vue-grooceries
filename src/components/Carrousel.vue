<template>
  <main class="main-body">
    <div id="carouselFeatured" class="carousel carousel-dark slide carousel-featured" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselFeatured" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselFeatured" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselFeatured" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="product in products" :key="product.id">
          <div class="carousel-item active" data-bs-interval="3000">
            <img :src="product.images[0]" class="" alt="...">
            <div class="carousel-caption d-md-block">
              <h5>{{ product.title }}</h5>
              <p>{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselFeatured" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselFeatured" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </main>
</template>
 
<script>


export default {
  name: 'Carrousel',
  components: {

  }
  , props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
  
<style scoped lang="scss"></style>