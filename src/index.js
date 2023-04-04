import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import './css/styles.css';
import { makeUl } from './makeUl';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(search, DEBOUNCE_DELAY));

function search(e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value.length === 1) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (value.length <= 1) {
    let list = document.querySelector('.country-list');
    list.innerHTML = '';
  } else {
    fetchCountries(value)
      .then(data => makeUl(data))
      .catch(() => Notify.failure('Oops, there is no country with that name'));
  }
}
