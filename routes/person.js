const express = require('express');

const axios = require('axios');

const url = 'https://swapi.dev/api/people';

const router = express.Router();

/* GET home page. */
router.get('/:num', (req, res) => {
  const personNames = [];
  const filmLinks = [];
  const getNameFromLink = [];
  
  const getname = async () => {
    const link = await axios.get(url);
    const pep = await (link.data.results);
    // console.log(pep)
    const getfilms = async (peps) => {
      peps.forEach((element) => {
        personNames.push(element.name);
        filmLinks.push(element.films);
        // console.log (element.name, element.films)
      });
      // console.log(req.params)
      const texPerson = personNames[parseInt(req.params.num)-1];
      const textFilms = filmLinks[parseInt(req.params.num)-1];

      res.render('person', { name: `${texPerson}`, links: `${textFilms}`, films: `${getNameFromLink}` });
    };
    getfilms(pep);
  };
  getname();
});

module.exports = router;
