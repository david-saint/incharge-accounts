const BASE_API = process.env.NODE_ENV === 'production'
  ? 'https://api.incharge.ml/api/v1' : 'https://api.incharge-app.test/api/v1';
const TERMS_URL = 'https://docs.google.com/document/d/1QVRX1_ThPssz8E2JioIhCwvY_hNdSOpNZVAKooEUGcU/edit';

export {
  BASE_API, TERMS_URL,
};
