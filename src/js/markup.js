import { refs } from './refs';

export function selectMarkup(result) {
  return result
    .map(({ name, id }) => {
      const optionMarkup = `<option value="${id}">${name}</option>`;
      refs.selectEl.insertAdjacentHTML('beforeend', optionMarkup);
    })
    .join('');
}

export function catInfoMarkup(result) {
  return result
    .map(item => {
      const infoMarkup = `
  <img src="${item.url}" width="400">
  <div class="cat-text-info">
  <h3>${item.breeds[0].name}</h3>
  <p>${item.breeds[0].description}</p>
  <p><span>Temperament:</span> ${item.breeds[0].temperament}</p>
  </div>`;

      refs.divEl.innerHTML = infoMarkup;
    })
    .join();
}
