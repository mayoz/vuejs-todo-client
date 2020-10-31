const apiClient = process.env.VUE_APP_API_CLIENT || 'mock';

// eslint-disable-next-line global-require, import/no-dynamic-require
export default require(`./${apiClient}`).default;
