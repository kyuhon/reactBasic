
//얕은 객체복사
const person ={
    name:"kdj",
    age: 29,
    tall:178
};

let person2 = person
person2.tall = 100;
console.log(person);
console.log(person2);

//깊은복사
let person3 = {...person};
person3.tall = 190;
console.log(person);
console.log(person3);

//객체비교(주소끼리 비교할까? 아니다. 값으로 비교한다.)
console.log(person);
console.log(person2);
console.log(person3);

console.log(person === person2);
console.log(person === person3);
console.log(person2 === person3);
console.log(JSON.stringify(person2) === JSON.stringify(person3));

function orderFood(food, callback) { 
    console.log(food + '음식주문'); 

    setTimeout(() => { 
        callback(food); 
    }, 3000); 
    } 
/*
orderFood('백숙', (food) => { 
    console.log(food + '주문완료'); 
});
*/

function coolFood(food, callback) { 
    console.log(food + '차게주문');
    setTimeout(() => { 
    callback(food); 
    }, 2000); 
}

/* coolFood('백숙', (food) => {
    console.log(food + '차게완료');
});
*/

function freezeFood(food, callback) {
    console.log(food + '냉동주문');
    setTimeout(() => {
      callback(food);
    }, 2000);
  }
/*  freezeFood('백숙', (food) => {
   console.log(food + '냉동완료');
  });
*/
  
orderFood('백숙', (food) => {
      console.log(food + '주문완료');
      coolFood(food, (food) => {
        console.log(food + '차게완료');
      });
});
