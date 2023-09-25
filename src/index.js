import { refs } from './js/refs';
import { fetchBreeds } from './js/cat-api';
import { onSelectElChange } from './js/cat-api';
import { selectMarkup } from './js/markup';

refs.selectEl.addEventListener('change', onSelectElChange);
refs.selectEl.classList.add('visually-hidden');
refs.loaderEl.classList.remove('visually-hidden');

fetchBreeds()
  .then(result => {
    refs.selectEl.classList.remove('visually-hidden');
    refs.loaderEl.classList.add('visually-hidden');

    selectMarkup(result);
  })
  .catch(error => {
    refs.selectEl.classList.add('visually-hidden');
    refs.loaderEl.classList.add('visually-hidden');
    refs.errorEl.classList.remove('visually-hidden');
    console.warn('Network Error', error);
  });
