const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function getContent(times = 10) {
    let result = '';
    let count = 0;
    while (count < times) {
        result += `<p>${lorem.generateParagraphs(1)}</p>`;
        count += 1;
    }
    return result;
};

module.exports = {getContent};