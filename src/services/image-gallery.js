import axios from 'axios';

export async function getImagesService({ query, perPage, currentPage }) {
  console.log('query:', query, 'perPage', perPage, 'currentPage', currentPage);
  axios.defaults.baseURL = `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=33614509-c1f88af9b42b2af62dde3bb25&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  const { data } = await axios.get();
  return data;
}
