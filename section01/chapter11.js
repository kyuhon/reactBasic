//1.push 배열에 요소 첨가
let array1 = [1,2,3];
let count = array1.push(5);
console.log(array1);
console.log(count);

//2. pop 배열에서 가져온다.
let array2 = [1,2,3];
let value = array2.pop();
console.log(array2);
console.log(value);

//3. shift (pop기능이 같다 : 위치 앞에서 뺀다.)
let array3 = [1,2,3];
let value3 = array3.shift();
console.log(array3);
console.log(value3);

//4. unshift (push기능과 같다: 위치 앞에서 넣는다) : 문제점을 가지고 있다.
let array4 = [1,2,3];
let value4 = array4.unshift(5,6);
console.log(array4);
console.log(value4);

//5. tosorted() : 기존의 배열을 정렬을 하는것아니라, 새로 정렬된 배열을 리턴한다.
let array5 = ["c", "a", "b"];
const array6 = array5.toSorted();
console.log(array5); 
console.log(array6); 