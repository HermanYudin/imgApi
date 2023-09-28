const accessKey = '8VBpwDgQ7FskYny1DWRt4qU9Uj8DobOB0AHDkH0kFFE';
const form = document.querySelector('.img-form');
const input = document.querySelector('.search-input');
const searchRes = document.querySelector('.search-results');
const showMoreBtn = document.querySelector('.show-more-btn');
let inputData = '';
let page = 1;
const reset = document.querySelector('.reset');

// ------Задаём первоначальное отображение контента на странице----
input.value = 'Coding';

if(input.value === 'Coding') {
    searchImages()
};

// ------Делаем курсор в поле ввода при загрузке страницы---------

window.addEventListener("DOMContentLoaded", function() {
    input.focus();
});

// ------Функция получения и отображения контента с api-------

async function searchImages(){
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if(page === 1){
        searchRes.innerHTML = '';
    }

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('search-result');
        const image = document.createElement('img');
        image.classList.add('search-result-img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLinkContainer = document.createElement('div');
        imageLinkContainer.classList.add('search-result-link-container');
        const imageLink = document.createElement('a');
        imageLink.classList.add('search-result-link');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLinkContainer);
        imageLinkContainer.appendChild(imageLink);
        searchRes.appendChild(imageWrapper);
    });

    page++;

    if(page > 1){
        showMoreBtn.style.display = 'block';
    }
};

// ----------Слушатели----------

form.addEventListener('submit',(event) => {
event.preventDefault();
page = 1;
searchImages();
});

showMoreBtn.addEventListener('click',() => {
    searchImages();
});

reset.addEventListener('click',() => {
    input.value = '';
});