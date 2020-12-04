// Go to giphy api and get some gifs using Axios.
const axios = require("axios");
require("dotenv").config();

// Make a request for a user with a given ID
const APIKEY = process.env.APIKEY;
axios
  .get(
    `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=kanye&limit=12`
  )
  .then(function (response) {
    // handle success
    const gifs = response.data.data;
    gifs.map((gif) => {
      console.log(gif.images.downsized.url);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
