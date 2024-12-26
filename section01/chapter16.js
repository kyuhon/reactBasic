//1. 비동기 처리방식으로 진행
console.log("1");

let id = setTimeout(()=>{
    console.log("2");
},3000);

console.log("3");