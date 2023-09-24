// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   'live_zr60gtmYway2jnmViOgPzPnqk2naOknryCdDGPr2wxWgNvyf71N5SCBtIUltTvla';
// import { fetchBreeds } from './js/cat-api';
const API_KEY =
  'live_zr60gtmYway2jnmViOgPzPnqk2naOknryCdDGPr2wxWgNvyf71N5SCBtIUltTvla';
const selectEl = document.querySelector('.breed-select');

fetchBreeds();

function fetchBreeds() {
  fetch('https://api.thecatapi.com/v1/breeds?&breed_ids=beng&key=${API_KEY}')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      return response.json();
    })
    .then(data => {
      // console.log(data);
      const element = data
        .map(({ name, id }) => {
          const optionMarkup = `<option value="${id}">${name}</option>`;
          selectEl.insertAdjacentHTML('beforeend', optionMarkup);
          const breedId = id;
        })
        .join('');
    })
    .catch(error => {
      console.warn('Network Error', error);
    });
}

function fetchCatByBreed(breedId) {
  fetch('https://api.thecatapi.com/v1/images/search?breed_ids=${item.id}')
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      console.log(data);
      // const element = data.map(item => {
      //   console.log(item.name);
      //   const optionMarkup = `<option value="${item.id}">${item.name}</option>`;
      //   selectEl.insertAdjacentHTML('beforeend', optionMarkup);
      // });
    })
    .catch(error => {
      console.warn('Network Error', error);
    });
}
