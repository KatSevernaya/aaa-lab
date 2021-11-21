<template>
  <ul class="catalog" v-if="quantaty>0">
    <product-card
      v-for="(item, index) in catalog"
      :key="index"
      :item="item"
      :number="index"
      :quantaty="quantaty"
    >
    </product-card>
  </ul>
  <div class="no-catalog" v-else>
    <p class="no-catalog__text">
      Увы, по вашему запросу отсутсвтуют категории
    </p>
  </div>
</template>
<script>
import ProductCard from './ProductCard.vue';

export default {
  components: { ProductCard },
  props: {
    category: String,
  },
  computed: {
    catalog() {
      // return this.$store.state.inputSearch.length > 0
      //   ? this.$store.getters.catalogSearch(this.category)
      //   : this.$store.getters.catalog(this.category);
      return this.$store.getters.catalog(this.category);
    },
    quantaty() {
      return this.$store.getters.catalog(this.category).length;
    },
  },
};
</script>
<style lang='scss'>

</style>
