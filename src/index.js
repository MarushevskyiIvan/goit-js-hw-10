import { refs } from './js/refs';
import { fetchBreeds } from './js/cat-api';
import { catInfoMarkup } from './js/markup';
import { selectMarkup } from './js/markup';
import { fetchCatByBreed } from './js/cat-api';

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

function onSelectElChange(evt) {
  const selectValue = evt.target.value;
  refs.divEl.innerHTML = '';
  refs.loaderEl.classList.remove('visually-hidden');
  fetchCatByBreed(selectValue)
    .then(result => {
      refs.loaderEl.classList.add('visually-hidden');
      catInfoMarkup(result);
    })
    .catch(error => {
      console.warn('Network Error', error);
    });
}
