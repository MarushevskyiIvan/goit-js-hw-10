const API_KEY =
  'live_zr60gtmYway2jnmViOgPzPnqk2naOknryCdDGPr2wxWgNvyf71N5SCBtIUltTvla';
const selectEl = document.querySelector('.breed-select');
const divEl = document.querySelector('.cat-info');

selectEl.addEventListener('change', fetchCatByBreed);

fetchBreeds();

function fetchBreeds() {
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
      console.log(data);
      return selectMarkup(data);
    })
    .catch(error => {
      console.warn('Network Error', error);
    });
}

function selectMarkup(data) {
  return data
    .map(({ name, id }) => {
      const optionMarkup = `<option value="${id}">${name}</option>`;
      selectEl.insertAdjacentHTML('beforeend', optionMarkup);
      breedId = id;
      fetchCatByBreed(id);
    })
    .join('');
}

function fetchCatByBreed(id) {
  fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&?api_key=${API_KEY}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      // console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);

      return catInfoMarkup(data);
    })
    .catch(error => {
      console.warn('Network Error', error);
    });
}

function catInfoMarkup(data) {
  return data
    .map(({ name, description, url, temperament }) => {
      const infoMarkup = `
  <img src="${url}" width="300">
  <h3>${name}</h3>
  <p>${description}</p>
  <p>${temperament}</p>`;
      divEl.insertAdjacentHTML('beforeend', infoMarkup);
    })
    .join('');
}
