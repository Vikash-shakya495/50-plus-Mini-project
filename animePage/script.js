const trending = [
  { img: './images/jjkposter.jpg', title: 'Jujutsu Kaisen' },
  { img: './images/demonslayerposter.jpg', title: 'Demon Slayer' },
  { img: './images/windbreaker.jpg', title: 'Wind Breaker' },
  { img: './images/sololeavelingposter.jpeg', title: 'Solo Leveling' },
  { img: './images/chainsawmanposter.jpeg', title: 'Chainsaw Man' },
];

let currentIndex = 0;
const imageElement = document.getElementById('carousel-image');
const titleElement = document.getElementById('carousel-title');

function updateCarousel(index) {
  imageElement.src = trending[index].img;
  titleElement.textContent = trending[index].title;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % trending.length;
  updateCarousel(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + trending.length) % trending.length;
  updateCarousel(currentIndex);
}

let slideInterval = setInterval(showNextSlide, 5000);

document.getElementById('next-btn').addEventListener('click', () => {
  clearInterval(slideInterval);
  showNextSlide();
  slideInterval = setInterval(showNextSlide, 5000);
});

document.getElementById('prev-btn').addEventListener('click', () => {
  clearInterval(slideInterval);
  showPrevSlide();
  slideInterval = setInterval(showNextSlide, 5000);
});



const animePosters = [
  {
      image: "./images/jjkposter.jpg",
      title: "Jujutsu Kaisen",
      yearReleased: 2020,
      genre: "Action, Supernatural, Fantasy"
  },
  {
      image: "./images/chainsawmanposter.jpeg",
      title: "Chainsaw Man",
      yearReleased: 2022,
      genre: "Action, Horror, Dark Fantasy"
  },
  {
      image: "./images/sololeavelingposter.jpeg",
      title: "Solo Leveling",
      yearReleased: 2023,
      genre: "Action, Fantasy, Adventure"
  },
  {
      image: "./images/demonslayerposter.jpg",
      title: "Demon Slayer",
      yearReleased: 2019,
      genre: "Action, Adventure, Fantasy"
  },
  {
      image: "./images/attackontitanposter.jpg",
      title: "Attack on Titan",
      yearReleased: 2013,
      genre: "Action, Drama, Fantasy"
  },
  {
      image: "./images/windbreaker.jpg",
      title: "Wind Breaker",
      yearReleased: 2021,
      genre: "Action, Sports, Drama"
  },
  {
      image: "./images/myheroacademia.jpg",
      title: "My Hero Academia",
      yearReleased: 2016,
      genre: "Action, Superhero, Adventure"
  },
  {
      image: "./images/onepunchmanposter.webp",
      title: "One Punch Man",
      yearReleased: 2015,
      genre: "Action, Comedy, Superhero"
  },
  {
      image: "./images/tokyorevengersposter.webp",
      title: "Tokyo Revengers",
      yearReleased: 2021,
      genre: "Action, Thriller, Drama"
  },
  {
      image: "./images/spyxfamilyposter.jpg",
      title: "Spy x Family",
      yearReleased: 2022,
      genre: "Action, Comedy, Family"
  },
  {
      image: "./images/deathnoteposter.jpg",
      title: "Death Note",
      yearReleased: 2006,
      genre: "Thriller, Mystery, Supernatural"
  }
];


document.body.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault();

  let animeContainer = document.querySelector('.anime-flex');
  animeContainer.innerHTML = '';

  const searchInput = document.body.querySelector('input').value.toLowerCase();
  animePosters.filter((anime) => {
    if (anime.title.toLowerCase().startsWith(searchInput)) {
      animeContainer.innerHTML += `
      <div class="anime-card">
          <img src=${anime.image} alt="">
          <div class="details">
            <h3>${anime.title}</h3>
            <p>Year Released: ${anime.yearReleased}</p>
            <p>Genre: ${anime.genre}</p>
          </div>
        </div>
        `;
      }
      console.log(anime);
  });
})

