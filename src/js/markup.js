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
  <img src="${item.url}" width="300">
  <h3>${item.breeds[0].name}</h3>
  <p>${item.breeds[0].description}</p>
  <p>Темперамент: ${item.breeds[0].temperament}</p>`;

      refs.divEl.innerHTML = infoMarkup;
    })
    .join();
}
