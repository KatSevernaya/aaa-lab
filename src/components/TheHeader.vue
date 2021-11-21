<template>
  <header class="header">
    <div class="header-logo">
      <div class="header-logo__img">
        <img src="../assets/img/general/logo-museum.png" alt="">
      </div>
      <p class="header-logo__text">прекрасная Работа,<br> достойная каждого</p>
    </div>
    <div class="header-cart">
      <img src="../assets/img/general/cart.svg" alt="">
      <p class="header-cart__title">Корзина</p>
      <div class="header-cart__number">
        <p class="header-cart__text">{{ goodsInCart  }}</p>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    goodsInCart() {
      return this.$store.state.cart;
    },
  },
};
</script>
