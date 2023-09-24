import { refs } from './refs';
import { selectMarkup } from './markup';
import { catInfoMarkup } from './markup';

const API_KEY =
  'live_zr60gtmYway2jnmViOgPzPnqk2naOknryCdDGPr2wxWgNvyf71N5SCBtIUltTvla';
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  refs.selectEl.classList.add('visually-hidden');
  fetch(`${BASE_URL}/breeds?&breed_ids=beng&?api_key=${API_KEY}`)
    .then(response => {
      refs.loaderEl.classList.remove('visually-hidden');
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(result => {
      refs.selectEl.classList.remove('visually-hidden');
      refs.loaderEl.classList.add('visually-hidden');
      selectMarkup(result);
    })
    .catch(error => {
      refs.loaderEl.classList.add('visually-hidden');
      refs.errorEl.classList.remove('visually-hidden');
      console.warn('Network Error', error);
    });
}

export function fetchCatByBreed(id) {
  refs.divEl.innerHTML = '';
  refs.loaderEl.classList.remove('visually-hidden');
  fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=beng,${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(result => {
      catInfoMarkup(result);
      refs.loaderEl.classList.add('visually-hidden');
    })
    .catch(error => {
      console.warn('Network Error', error);
    });
}
