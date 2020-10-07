console.log(`Zadanie rekrutacyjne - formularz`);

let name = document.getElementById('name');
let queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
let sentName = urlParams.get('name');
name.innerText = sentName;