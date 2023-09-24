const API_KEY =
  'live_zr60gtmYway2jnmViOgPzPnqk2naOknryCdDGPr2wxWgNvyf71N5SCBtIUltTvla';

const selectEl = document.querySelector('.breed-select');
const divEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

selectEl.addEventListener('change', fetchCatByBreed);

fetchBreeds();

function fetchBreeds() {
  selectEl.classList.add('visually-hidden');
  loaderEl.classList.remove('visually-hidden');
  fetch(
    `https://api.thecatapi.com/v1/breeds?&breed_ids=beng&?api_key=${API_KEY}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      selectEl.classList.remove('visually-hidden');
      loaderEl.classList.add('visually-hidden');
      selectMarkup(data);
    })
    .catch(error => {
      console.warn('Network Error', error);
      errorEl.classList.remove('visually-hidden');
    });
}

function selectMarkup(data) {
  return data
    .map(({ name, id }) => {
      const optionMarkup = `<option value="${id}">${name}</option>`;
      selectEl.insertAdjacentHTML('beforeend', optionMarkup);
    })
    .join('');
}

function fetchCatByBreed(id) {
  divEl.innerHTML = '';
  loaderEl.classList.remove('visually-hidden');
  fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=beng,${id}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      catInfoMarkup(data);
      loaderEl.classList.add('visually-hidden');
    })
    .catch(error => {
      console.warn('Network Error', error);
    });
}

function catInfoMarkup(data) {
  const or = data
    .map(item => {
      const infoMarkup = `
  <img src="${item.url}" width="300">
  <h3>${item.breeds[0].name}</h3>
  <p>${item.breeds[0].description}</p>
  <p>Темперамент: ${item.breeds[0].temperament}</p>`;

      divEl.innerHTML = infoMarkup;
    })
    .join();
}
