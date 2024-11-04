const input = document.querySelector('input');
const Title = document.querySelector('.Title');
const Year = document.querySelector('.Year');
const Actors = document.querySelector('.Actors');
const Director = document.querySelector('.Director');
const button = document.querySelector('button');
const Poster = document.querySelector('.poster');

const apiKey = "9e1ee223"; // Replace 'YOUR_API_KEY' with your actual OMDb API key
const baseURL = 'https://www.omdbapi.com/';

const getFacts = async () => {
  const searchQuery = input.value; // Search query for movies starting with "r"
  const searchURL = `${baseURL}?apikey=${apiKey}&s=${encodeURIComponent(searchQuery)}`;

  try {
    console.log("getting data : ");
    let response = await fetch(searchURL);
    let data = await response.json();

    if (data.Search && data.Search.length > 0) {
      // Assuming the first search result is the desired movie
      const firstResult = data.Search[0];
      const movieID = firstResult.imdbID;
      const movieDetailsURL = `${baseURL}?apikey=${apiKey}&i=${movieID}`;

      // Fetch detailed information about the movie
      response = await fetch(movieDetailsURL);
      data = await response.json();

      // Display the movie details
      Title.innerText = data.Title;
      Year.innerText = data.Released;
      Director.innerText = data.Director;
      Actors.innerText = data.Actors;
      Poster.src = data.Poster;
        Poster.alt = data.Title;
        console.log(data.Poster);
      console.log(data);
    } else {
      // If no results are found
      console.log('No results found.');
      Title.innerText = 'No movie found.';
      Year.innerText = '';
      Director.innerText = '';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

button.addEventListener('click', getFacts)