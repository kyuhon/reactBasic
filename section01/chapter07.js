//1. 배열생성
let arrayA = new Array();    //배열생성자
let arrayB = {};    //객체 리터럴

//2. 배열에 들어올수 멤버(기본타입 5가지, 객체타입 1가지(3종류))
let arrayC = [
    1,
    1.0,
    true,
    "hello",
    undefined,
    null,
    {},
    [],
    ()=>{
        console.log("나는 함수다.") // 리턴값이 없으므로 undifined 가 나옴
    }
];

console.log(arrayC[0]);