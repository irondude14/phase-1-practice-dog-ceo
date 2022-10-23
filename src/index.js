console.log('%c HI', 'color: firebrick')

let breeds = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchDogImg();
    dogBreed();
    breedSelector();
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
    .then(data => {
      breeds = Object.keys(data.message)
      renderBreeds(breeds)
    }) //object of arrays
};
        
    
function renderBreeds(breeds) {
    breeds.map(breed => {
        const breedsNames = document.getElementById('dog-breeds');
        const li = document.createElement('li');
        li.innerText = breed;
        li.style.cursor = "pointer"
        breedsNames.appendChild(li);
        let dogBreed = false;
        li.addEventListener('click', () => {
          dogBreed = !dogBreed;
          if (dogBreed) {
            li.style.color = "firebrick";
          } else {
            li.style.color = "black";
          };
        });
    });          
};

function breedSelector() {
  let breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener('change', function(event) {
    selectBreed(event.target.value);
  });
};

function selectBreed(letter) {
  const dogBreeds = document.querySelector('#dog-breeds');
  removeChildren(dogBreeds);
  renderBreeds(breeds.filter(breed => breed.startsWith(letter)));
};

// function updateBreedList(breeds) {
//   const dogBreeds = document.querySelector('#dog-breeds');
//   removeChildren(dogBreeds);
//   breeds.forEach(breed => renderBreeds(breed));
// };

function removeChildren(element) {
  let child = element.lastElementChild;
  while(child) {
    element.removeChild(child);
    child = element.lastElementChild;
  };
};

