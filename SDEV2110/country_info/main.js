const APIKey = '3d15727cb57551b45db07598d9ee1586';
const APIURL = 'http://api.countrylayer.com/v2/all'

const search = document.querySelector('#search');
const infoRadio = document.querySelector('#infoRadio');
const regionRadio = document.querySelector('#regionRadio');
const domainRadio = document.querySelector('#domainRadio');
const inputForm = document.querySelector('.inputForm');
const results = document.querySelector('.results');

let newContent = '';

// info radio
function getInfo(data) {
  const searchTerm = search.value.trim().toLowerCase();
  const filteredData = Array.from(data).filter(data => data.name.toLowerCase().includes(searchTerm));
  let count = filteredData.length;
  if (count == 0) {
    newContent = `Countries containing: ${searchTerm}<br><br>`;
    newContent += 'No results -- check spelling';
  } else {
    newContent = `Countries containing: ${searchTerm}<br><br>`;
    function getName(item) {
      newContent += `
      country: ${item.name}<br>
      region: ${item.region}<br>
      top level domain: ${item.topLevelDomain}<br><br>
      `;
    }
    filteredData.forEach(item => getName(item));
  }
}

// region radio
function regionInfo(data) {
  const searchTerm = search.value.trim().toLowerCase();
  const filteredData = Array.from(data).filter(data => data.region.toLowerCase().includes(searchTerm));
  let count = filteredData.length;
  newContent = `Countries in: ${searchTerm}<br><br>Number of countries in region: ${count}<br><br>`;
  if (count == 0) {
    newContent += 'No results -- check spelling';
  } else {
    newContent += `Region Name: ${filteredData[0].region}<br><br>`;
    function getName(item) {
      newContent += `${item.name}<br>`;
    }
    filteredData.forEach(item => getName(item));
  }
}

// domain radio
function domainInfo(data) {
  const searchTerm = search.value.trim().toLowerCase();
  function searchDomains(item) {
    return item.topLevelDomain[0] === '.' + searchTerm;
  }
  const filteredData = Array.from(data).filter(searchDomains);
  if (filteredData.length === 0) {
    newContent = 'No results -- check spelling -- no periods, please';
  } else {
    newContent = `Top Level Domain ${filteredData[0].topLevelDomain} is for ${filteredData[0].name}`;
  }
}

function getData() {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('could not fetch the data');
      }
    });
    request.open('GET', APIURL + '?access_key=' + APIKey);
    request.send();
  });
}

getData().then(data => {
  infoRadio.addEventListener('change', e => {
    getInfo(data);
    results.innerHTML = newContent;
  });
  regionRadio.addEventListener('change', e => {
    regionInfo(data);
    results.innerHTML = newContent;
  });
  domainRadio.addEventListener('change', e => {
    domainInfo(data);
    results.innerHTML = newContent;
  });
}).catch(err => {
  console.log('promise rejected:', err);
});