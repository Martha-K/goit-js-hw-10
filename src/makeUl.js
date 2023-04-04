export function makeUl(array) {
  let list = document.querySelector('.country-list');
  list.innerHTML = '';

  for (const element of array) {
    let li = document.createElement('li');
    let image = document.createElement('img');

    li.classList.add('list-element');
    image.classList.add('img-element');
    image.setAttribute('src', element.flags.svg);
    image.setAttribute('alt', element.name.official);

    li.appendChild(image);
    li.appendChild(document.createTextNode(element.name.official));

    if (array.length === 1) {
      let div = document.createElement('div');
        div.classList.add('content-wrapper');
        
      const capital = document.createElement('p');
      const population = document.createElement('p');
      const languages = document.createElement('p');

      const capitalContent = document.createTextNode(
        `Capital: ${element.capital[0]}`
      );
      const populationContent = document.createTextNode(
        `Population: ${element.population}`
      );
      const languagesContent = document.createTextNode(
        `Languages: ${element.languages.ukr}`
      );
      capital.appendChild(capitalContent);
      population.appendChild(populationContent);
      languages.appendChild(languagesContent);

      div.appendChild(capital);
      div.appendChild(population);
      div.appendChild(languages);

      li.appendChild(div);
    }
    +list.appendChild(li);
  }
  return list;
}
