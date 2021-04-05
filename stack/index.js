const Stack = require('./Stack');

const cards = new Stack();

//push
cards.push('test');
cards.push('test1');
cards.push('test2');
cards.push('test3');

const result = cards.pop();
console.log(result);
