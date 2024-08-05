//activity 1

//task1

import{lodash1, add as sum} from './export.js';
console.log(sum(2,3));//output=5

//task2
import { Person} from './export.js';
console.log(Person);//output=anubhav

//activity 2

//task3

import{multy} from'./export.js';
import{newfn1} from'./export.js';

console.log(multy(2,3));//output=6
console.log(newfn1(2));//output=4

//task4

import add2 from './export.js';
console.log(add2(4));//output=6

//activity 3

//task5

import * as newexport from './exportnew.js';
console.log(newexport.add3(4));

//activity 4

//task6
import _ from '../node_modules/lodash';
const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const reversedArray = _.reverse(array);

    console.log(reversedArrayArray); // Output: [ 8,7,6,5,4,3,2,1]

//task7

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Data received successfully');
  })
  .catch(error => {
    console.error('Error:', error);
  });