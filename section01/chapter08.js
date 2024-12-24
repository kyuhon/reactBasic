//1. 단락평가
let a = false;
let b = true;

let funca = ()=>{
    console.log("funca");
    return false;
};

let funcb = ()=>{
    console.log("funcb");
    return true;
};

console.log(funca() || funcb());

//자바스크립트에서는 모든 객체타입에 true나 false를 준다

//실제사용하는 방법
//함수 선언, 표현식, 화살표함수
function printName(person){
    const name = person && person.name;
    console.log(name || "person 값이 없음");
}
function printName2(person){
    if(typeof person === 'object'){
        console.log(person.name);
    }else{
        console.log("person 값이 없음");
    }
}
console.log(typeof {});
//printName();
printName2({name:"kdj"});