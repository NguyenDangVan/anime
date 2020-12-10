import axios from 'axios';

const API_URL = '/api/v1/movies/create';

export function getMovies() {
  return axios.get(`${API_URL}`);
}

export function updateRecipe(formData, movieId) {
  return axios({
    method: 'put',
    url: `${API_URL}/${movieId}`,
    data: formData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
  });
}
