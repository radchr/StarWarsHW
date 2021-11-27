const axios = require('axios');

axios.get('https://dog.ceo/api/breeds/image/random')
  .then(function (r) {
    // handle success
    console.log(r.data.message);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });