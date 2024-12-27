//외부에 있는 모듈을 가져온다.(import)
//const moduleData = require('./math');
//const {add,sub} = require('./math');
import {add,sub} from './math.js';
import multiply from './math.js';
import randomcolor from 'randomcolor';

const colorString = randomcolor();


console.log(colorString);
console.log(add(20,20));
console.log(sub(10,20));
console.log(multiply(30,20));

