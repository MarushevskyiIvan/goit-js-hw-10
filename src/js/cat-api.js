const API_KEY =
  'live_zr60gtmYway2jnmViOgPzPnqk2naOknryCdDGPr2wxWgNvyf71N5SCBtIUltTvla';
const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?&breed_ids=beng&?api_key=$ {API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export function fetchCatByBreed(id) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${id}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
