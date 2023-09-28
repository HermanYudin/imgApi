const accessKey = '5Fhq68dS3K3CbXarxRqmBEgK2BdE81Z5-F2LCjpeFag';
const form = document.querySelector('.img-form');
const input = document.querySelector('.search-input');
const searchRes = document.querySelector('.search-results');
const showMoreBtn = document.querySelector('.show-more-btn');
let inputData = '';
let page = 1;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

async function searchImages(){
    inputData = input.value;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if(page === 1){
        searchRes.innerHTML = '';
    }
}