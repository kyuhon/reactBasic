//1. 숫자 양수무한대값, 음수무한대
let infinityValue = Infinity;
let minfinityValue = -Infinity;
//나는 숫자가 아니야.
let notANumber = NaN;   //숫자가 없다
let name = "김" * "동진";   //NaN
console.log(name);

let nan = 1 + "10";     //묵시적 형변환 10을 문자열로 취급
let nan2 = 2 * "10";    //묵시적 형변환 10을 숫자로 취급
//연산식 결과가 나올수 있도록 형변환

console.log(nan);
console.log(nan2);

//템플릿리터널 기능을 잘 사용하자
let name2 = "김동진";
let mylocation = "강남";
let introduceText = "저는 "+ mylocation + "에서 352호 강사입니다.";
let introduceText2 = `저는 ${mylocation}에서 352호 ${name2}강사입니다.`;    //템플릿 리터럴
console.log(introduceText);
console.log(introduceText2);

//형변환 Number, parseInt(앞에있는 숫자만) => Number 타입으로 변경한다.
let str2 = "10개";
//console.log(Number(str2));
//console.log(Number(str2)+10);
console.log(parseInt(str2)+10);

//산술연산자에서 주의할점
let num1 = 1;
let num2 = 2;
console.log(num1 / num2);

//비교연산자 (==),(!==):비추 (===),(!===):강추, (타입과 값을 같이비교한다.)
let compA = "1";
console.log( 1 == "1");
console.log( 1 === "1");

//typeof 연산자(신경쓰지 말것) object
let num3 = 10;
let x = null;
console.log(typeof num3);
console.log(typeof x);

//병합연산자 (??) : null, undefined 그 해당된 값을 적용을 안시켜준다
let num5;
console.log(typeof num5);
num5 = num5 ?? 10;  //변수가 undefined 다른값을 준다.
console.log(num5);

let num6 = 10;
num6 = num6 ?? 20;
console.log(num6);

let num7;
if(num7 === undefined || num7 === null){
    num7 = 30;
}
console.log(num7);
