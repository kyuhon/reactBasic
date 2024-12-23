//1. 함수선언식, 함수 표현식, 화살표함수 자동으로 호이스팅발생이 안된다
//함수선언식만 호이스팅이 된다
let getArea = (width, height) =>{width * height};

let area1 = getArea(10,20);
console.log(area1)
