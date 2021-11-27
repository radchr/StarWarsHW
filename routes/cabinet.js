const express = require('express');
const axios = require('axios');
const router = express.Router();
const urlBrids = 'https://dog.ceo/api/breeds/list/all';
const tempArr = [];

router.get('/', (req, res) => {
  
  if (req.query.q) {
    console.log(req.query)
    axios
      .get('https://dog.ceo/api/breed/bulldog/english/images/random')
      .then((r) => {
        let str = `<img style="width: 200px" src="${r.data.message}">`
        res.render('cabinet', {img: str})
      })
  } else {
    axios
      .get(urlBrids)
      .then((result) => {
        for (item in result.data.message) {
          if (result.data.message[item].length) {
            result.data.message[item].forEach(element => {
              tempArr.push(`${element}${item}`);
            });
          } else {
            tempArr.push(item);
          }
        }
      })
      .then(() => {
        const someHTML = `<div style="background-color: red; width: 300px; height: 300px"> </div>`
        res.render('cabinet', {div1: someHTML});
      })
  }
 
});



/*
  bulldog key english value
  english bulldog
  https://dog.ceo/api/breed/bulldog/english/images/random
*/







// const prom = new Promise((resolve, reject) => {
//   request(url,  (err, response, body) => {
//     if (err) {
//       reject(err);
//       return
//     }
//     const result = JSON.parse(body);
//     // console.log(`Result 1 >>>`, result.message);
//     tempArr.push(result.message);
//     resolve(tempArr)
//   });
// })

// prom
//   .then((r) => {
//     console.log('Result 1 >>>>', r); 
//     return 
//   })
//   .then((r) => {console.log('Result 2 >>>>', r)})
//   .catch((err) => {console.log('New err>>', err)})






module.exports = router;