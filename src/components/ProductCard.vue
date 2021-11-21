<template>
  <li class="product-card"
    :class=" { 'product-card_size-xl' : (number+1 === 3)&&(quantaty > 3),
                'product-card_sold' :   item.status === 'sold'
     }"
    @mouseenter="showContent($event)"
    @mouseleave="hideContent($event)"
  >
    <div class="product-card__wrap"
      :style="{'background-image': 'url(' + require(`./../assets/img/content/${item.img}`) + ')'}"
    >
      <div
        class="product-card__content product-card__content_hidden">
        <h2 class="product-card__content__title">{{ item.title }}</h2>
        <h3 class="product-card__content__author">{{ item.author }}</h3>

        <div class="product-card__content__bottom-block" v-if="item.status === 'inSale'">
          <div class="product-card__content__price">
            <p class="product-card__content__old-price">{{ oldPrice }} $</p>
            <p class="product-card__content__actual-price">{{ actualPrice }} $</p>
          </div>
          <button class="product-card__content__to-buy"
            v-if="inCart === false"
            @click="toCart()"
          >
            Купить
          </button>
          <button class="product-card__content__bought" v-else>
            В корзине
            <img
              class="product-card__content__icon-done"
              src="./../assets/img/general/ок.svg" alt=""
            >
          </button>

        </div>
        <div
          class="product-card__content__bottom-block
          product-card__content__bottom-block_sold"
          v-else
         >
          <img
            class="product-card__content__sold-logo"
            src="./../assets/img/general/sold.svg" alt=""
          >
          <p class="product-card__content__sold-text">Продана на аукционе</p>
        </div>

      </div>
    </div>
  </li>
</template>
<script>

export default {
  props: {
    item: Object,
    number: Number,
    quantaty: Number,
  },
  data() {
    return {
      inCart: false,
    };
  },
  computed: {
    oldPrice() {
      return this.item.oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
    actualPrice() {
      return this.item.actualPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
  },
  methods: {
    showContent(event) {
      event.target.querySelector('.product-card__content')
        .classList.remove('product-card__content_hidden');
      if (this.item.status === 'sold') {
        event.target.classList.remove('product-card_sold');
      }
    },
    hideContent(event) {
      event.target.querySelector('.product-card__content')
        .classList.add('product-card__content_hidden');
      if (this.item.status === 'sold') {
        event.target.classList.add('product-card_sold');
      }
    },
    toCart() {
      this.inCart = true;
      this.$store.commit('putInCart');
    },
  },
};
</script>
