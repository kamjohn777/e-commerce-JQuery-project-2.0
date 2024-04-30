require('dotenv').config();

fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.urls.full); // This will log the URL of the full resolution image
  });