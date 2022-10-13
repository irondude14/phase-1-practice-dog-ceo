console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    fetchDogImg();
    dogBreed();
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchDogImg() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => renderImg(data))
}

function renderImg(images) {
    const imgCont = document.querySelector("#dog-image-container")
    images.message.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        imgCont.appendChild(img)
    })
}


const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function dogBreed() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => renderBreeds(data)) //object of arrays
}
        
    
 function renderBreeds(breeds) {
    for (const breed in breeds['message']) {
        const breedsNames = document.getElementById('dog-breeds')
        const li = document.createElement('li')
        li.innerText = breed
        breedsNames.appendChild(li)
    }             
 } 
 
//  function changeColor() {
//     const list = document.querySelector('li')
//     list.classList.add = 'dogList'
//     CSS(dogList, {
//         color: 'red'
//     })
//  }   
 
 document.querySelector('ul').addEventListener('click', () => {

 })
    
