//common js 모듈시스템
//math 모듈(계산하는 모듈: 라이브러리: 함수), 클래스
export function add(a, b){
    return a + b;
}


function sub(a, b){
    return a - b;
}

export default function multiply(a,b){
    return a * b;
}

// let add1 = function (a, b){
//     return a + b;
// }
// let add2 = (a,b) => a + b;

//모듈을 외부로 보낸다.
// module.exports = {
//      add,
//      sub,
// };

//ESM 모듈방식으로 전환한다.
export{sub};

//자바스크립트 한개당 하나의 모듈만 만들고 디폴트를 지정해준다
ㅊ