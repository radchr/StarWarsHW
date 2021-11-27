const express = require('express');
const axios = require('axios');
const url = 'https://swapi.dev/api/people'

const router = express.Router();

/* GET home page. */
router.get('/:num', (req, res, next) => {
  let personNames = []
  let filmLinks = []
  const getname = async () => {
    let link = await axios.get(url)
    let pep = await (link.data.results)
    // console.log(pep)
    let getfilms = async (pep) => {
      pep.forEach(element => {
        personNames.push(element.name);
        filmLinks.push(element.films);
        // console.log (element.name, element.films)
      });
      // console.log(req.params)
      res.send(`index <div>${personNames[parseInt(req.params.num)-1]}</div> <div>${filmLinks[parseInt(req.params.num)-1]}</div>`);
    }
    getfilms(pep);
    
  }
  getname()

  
});

module.exports = router;
