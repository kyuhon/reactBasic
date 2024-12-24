//객체순회방법
const person ={
    name:"kdj",
    age: 29,
    tall: 178
};

console.log(person.name);
console.log(person["name"]);

//객체에서 멤버변수이름을 배열로 가져오기
const personKey = Object.keys(person);
const personValue = Object.values(person);
console.log(personKey);
console.log(personValue);
//keys 마우스를 가져다 놓으면 => 키값에 객체를 주면 스트링 배열을 준다 라고 해석할수 있어야한다

//반복문을 이용해서 객체값에 있는 모든 원소값을 출력한다
for(let i=0;i<personKey.length;i++){
    let key = personKey[i];
    console.log(person[key]);
}

