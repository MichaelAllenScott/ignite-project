const express = require('express');
const fs = require('fs'); //native module to read mock database JSON file
const cors = require('cors'); //cors module to for cross-origin requests

const app = express();
app.use(express.json());
app.use(cors());

// retrieve words data from json
let wordsDictionary = {};	
try {	
  const wordsData = fs.readFileSync('./words_dictionary.json', 'utf8');	
  wordsDictionary = JSON.parse(wordsData);	
  Object.freeze(wordsDictionary);
} catch (error) {	
  console.log(`Error reading words_dictionary.json file ${error}`);	
}

// GET /api/english_words/prefix_search/{word}
app.get('/api/english_words/prefix_search/:word', (request, response) => {
  try {
    const searchWord = request.params.word;
    const matchedWords = [];

    // Search word must be only 1 word with no white space and only letters.
    const onlyLettersRegex = /^[a-z]+$/i;
    trimmedSearchWord = searchWord.trim();
    if (!trimmedSearchWord || !onlyLettersRegex.test(trimmedSearchWord)) {
      return response.status(400).json(`Invalid search string sent: '${searchWord}'. Must be a single word and only contain letters.`);
    }

    // Retrieve all matched words from words dictionary
    for(var key in wordsDictionary) {
      if (key.toLowerCase().startsWith(trimmedSearchWord.toLowerCase()) && key.length >= 3) {
        matchedWords.push(key);
      }
    }

    // Return matched words
    return response.status(200).json(matchedWords);
  } catch (error) {
    return response.status(500).json(`An error occured during word search. Exception: '${error}'`);
  }
});

module.exports = app;