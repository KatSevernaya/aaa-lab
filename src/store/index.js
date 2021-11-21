import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: 0,
    inputSearch: '',
    catalog: [
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img1.jpg',
        status: 'inSale',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Тайная вечеря',
        author: 'Леонардо да Винчи, 1498 гг',
        img: 'img2.jpg',
        status: 'inSale',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img3.jpg',
        status: 'inSale',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img4.jpg',
        status: 'inSale',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img5.jpg',
        status: 'sold',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img6.jpg',
        status: 'inSale',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img7.jpg',
        status: 'inSale',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img8.jpg',
        status: 'inSale',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Страшный суд. Фрагмент',
        author: 'Джотто ди Бондоне, 1306 г',
        img: 'img9.jpg',
        status: 'sold',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img10.jpg',
        status: 'inSale',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img11.jpg',
        status: 'inSale',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img12.jpg',
        status: 'inSale',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },
      {
        title: 'Рождение Венеры',
        author: 'Сандро Боттичелли, 1501 г',
        img: 'img13.jpg',
        status: 'sold',
        oldPrice: 2000000,
        actualPrice: 1000000,
      },

    ],
  },
  mutations: {
    putInCart(state) {
      const goods = state.cart + 1;
      state.cart = goods;
    },
    findByName(state, inputSearch) {
      state.inputSearch = inputSearch;
    },
  },
  actions: {
  },
  getters: {

    // catalog: (state) => (category) => {
    //   let catalogList = [];
    //   if (category === 'all') {
    //     catalogList = state.catalog;
    //   } else {
    //     catalogList = state.catalog.filter((item) => item.status === category);
    //   }
    //   return catalogList;
    // },
    catalog: (state) => (category) => {
      let catalogList = [];
      if (category === 'all') {
        catalogList = state.catalog;
      } else {
        catalogList = state.catalog.filter((item) => item.status === category);
      }
      const newList = state.inputSearch.length > 0
        ? catalogList.filter((item) => item.title
          .toLowerCase().includes(state.inputSearch.toLowerCase()))
        : catalogList;
      return newList;
    },
  },
});
