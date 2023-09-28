import ky from 'ky';

export const $api = ky.extend({
  prefixUrl: 'https://jsonplaceholder.typicode.com',
});
