import axios from 'axios';

export const keepAuthenticated = () =>
  axios
    .get('https://www.upwork.com/ab/account-security/login')
    .then(response => [null, response])
    .catch(error => [error, null]);

export const getProjects = async () => {
  await keepAuthenticated();

  return axios
    .get(
      'https://www.upwork.com/ab/find-work/api/feeds/search',
      { headers: { 'X-Requested-With': 'XMLHttpRequest' } }
    )
    .then(response => [null, response.data.results])
    .catch(error => [error.response, null]);
};
