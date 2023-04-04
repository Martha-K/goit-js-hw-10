import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(search, DEBOUNCE_DELAY));

function search(e) {
//   e.preventDefault();

    const value = input.value;
  fetchCountries(value);
}
