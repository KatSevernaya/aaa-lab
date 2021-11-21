<template>
  <div class="filters">
    <div class="filters__filter">
      <button
        class="filters__filter__button filters__filter__button_active"
        @click="setActiveCategory($event, 'all')"
      >
        Все
      </button>
      <button
        class="filters__filter__button"
        @click="setActiveCategory($event, 'sold')"
      >
        Проданные на аукционе
      </button>
    </div>
    <form class="filters__search" @submit.prevent="findByName()">
      <input
        class="filters__search__input"
        type="text"
        placeholder="Поиск по названию картины"
        v-model = "inputSearch"
      >
      <button class="filters__search__button" type="submit">
        Найти
        <img class="filters__search__icon" src="~@/assets/img/general/search.svg" alt="">
      </button>
    </form>
  </div>
</template>
<script>
export default {
  emits: ['set-category'],
  data() {
    return {
      inputSearch: '',
    };
  },
  methods: {
    setActiveCategory(event, category) {
      document.querySelector('.filters__filter').childNodes.forEach((btn) => {
        btn.classList.remove('filters__filter__button_active');
      });
      event.target.classList.add('filters__filter__button_active');
      this.$emit('set-category', category);
    },
    findByName() {
      this.$store.commit('findByName', this.inputSearch);
      this.inputSearch = '';
    },

  },
};
</script>
