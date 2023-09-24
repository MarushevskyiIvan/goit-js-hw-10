import { refs } from './js/refs';
import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';

refs.selectEl.addEventListener('change', fetchCatByBreed);

fetchBreeds();
