<template>
<div class="page">
  <the-header></the-header>
  <section class="content">
    <the-banner></the-banner>
    <the-filter
      @set-category="setCategory"
    ></the-filter>
    <the-catalog
      :category="category"
    ></the-catalog>
  </section>
  <the-footer></the-footer>
</div>
</template>

<script>
import './assets/scss/style.scss';
import TheHeader from './components/TheHeader.vue';
import TheBanner from './components/TheBanner.vue';
import TheFooter from './components/TheFooter.vue';
import TheFilter from './components/TheFilter.vue';
import TheCatalog from './components/TheCatalog.vue';

export default {
  name: 'App',
  components: {
    TheHeader, TheBanner, TheFooter, TheFilter, TheCatalog,
  },
  data() {
    return {
      category: 'all',
    };
  },
  methods: {
    setCategory(cat) {
      this.category = cat;
    },
  },
};
</script>

<style>

</style>
