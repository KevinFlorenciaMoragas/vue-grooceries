<template>
  <section class="top-offers">
    <div class="container">
      <h2 class="top-offers__title">Deals of the day</h2>
      <div class="top-offers-grid">
        <article v-for="product in products ">
          <a href="">
            <div class="product-card__top">
              <div class="product-card__image">
                <img :src="product.images[0]" alt="iphone 9">
                <div class="product-card__discount">
                  <span>{{product.discountPercentage}}</span>
                </div>
              </div>
            </div>
            <div class="product-card__bottom">
              <div class="product-card__description">
                <div class="product-card__rating"></div>
                <div class="product-card__description">
                  <h2>{{product.title}}</h2>
                  <p>{{product.description}}</p>
                </div>
              </div>
              <div class="product-card__price">
                <span>{{product.price}}</span>
              </div>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
<script>


export default {
  name: 'Cards',
  components: {

  }  , props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
  
<style scoped lang="scss"></style>