import { makeUl } from './makeUl';

export const fetchCountries = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
    if (name.length > 1) {
         fetch(url)
    .then(response => {
      return response.json();
    })
    // .then(data => console.log('data', data))
    .then(data => makeUl(data))
    .catch(error => console.log('error', error));
    }
 
};
