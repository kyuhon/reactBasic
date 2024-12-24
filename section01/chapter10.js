//18장 배열내장함수 전부 암기

//forEach(함수(value,index,객체배열)) : 향상된포문 for( 객체 : 객체배열 )
//객체, 배열, 함수 이 3가지로만 장난친다
const array = [1,2,3,4];
const array2 = [];

//일반포문
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}

//foreach
array.forEach((v, i, a)=>{
    console.log(v);
    console.log(i);
    console.log(a);
    console.log("=========");
});

array.forEach((v)=>console.log(v));
array.forEach((v)=>array2.push(v*2));
console.log(array2);

let array3 = [ 
    { name: "구길동" , age: 10}, 
    { name: "홍길동" , age: 10}, 
    { name: "저길동" , age: 10}, 
    { name: "말길동" , age: 10}, 
    { name: "홍길동" , age: 20}, 
];

array3.forEach((v)=>{console.log(v)});

//find
const findValue = array3.find((v)=>{
    return v.name === "홍길동";
});

console.log(findValue);

//filter
const findArray = array3.filter((v)=>{
    return v.name === "홍길동";
});
console.log(findArray);

//Map (지도 : 내가 요청하는 정보로 새로 배열로 포함시켜서 리턴한다)
const ageArray = array3.map((v)=>{
    return v.age+30;
});
console.log(ageArray);

//findIndex 해당된 객체를 찾아서 그 위치를 리턴한다.
const findIdx = array3.findIndex((v)=>{
    return v.name === "홍길동";
});
console.log(findIdx);

//includes
const flag = array.includes(3);
console.log(flag);

//indexOf
const array6 = [1,2,2,2,,4];
const value = array6.indexOf(3);
console.log(value);

//slice
const array7 = [1,2,3,4,5,6,7];
const sliceArray = array7.slice(2,5);
console.log(sliceArray);

const sliceArray2 = array3.slice(2,5);
console.log(sliceArray2);

//concat
let array8 = [ 
    { name: "구길동" , age: 10}, 
    { name: "홍길동" , age: 10}, 
];
let array9 = [ 
    { name: "말길동" , age: 10}, 
    { name: "홍길동" , age: 20}, 
];

const returnArray = array8.concat(array9);
console.log(returnArray);

//sort
const array10 = [1,10,2,20,3,30,4,40];
array10.sort();
console.log(array10);

array10.sort((a,b)=>{return a-b});
console.log(array10);

array10.sort((a,b)=>{return b-a});
console.log(array10);

//join 합치기
const array11 = ["김동진","님","안녕하세요","반가워요"]; 
const joined = array11.join("=="); 
console.log(joined); 

//for of 반복문 (자바의 향상된 for문)
let array12 = [1,2,3];
for (let item of array12){
    console.log(item);
};

//for in
const person ={
    name: "kdj",
    age: 50,
    tall: 178
};
for (let key in person) { 
    const value = person[key]; 
    console.log(key, value); 
  } 