# Patamancy

A pataphysical bibliomancy library on Alfred Jarry's Gestes et opinions du docteur Faustroll

```javascript
import patamancy from 'patamancy';

var position = 12345; //  

// var options {position: 12345}; // quote at position 12.345% of the book
var options = {}; // random quote
var quote = bibliomancy.randomQuote(options);

console.log(quote.quote);
console.log(quote.position/1000, "%");
console.log(quote.chapter.join('\n'));
console.log("https://mmai.github.io/faustrollianae/#/loc/"+quote.position);
```
