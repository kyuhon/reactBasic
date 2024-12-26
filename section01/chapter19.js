//1. promise pending 상태
const promise = new Promise(()=>{
    //2초동안 작업처리한것으로 하자
    setTimeout(() => {
        console.log("Hello");
    }, 2000);
});

//2초후에 부르는게 아니라 바로 리턴되는 promise 콜한 것이다
console.log(promise);

//2. promise fulfilled 상태
const promise2 = new Promise((resolve, reject)=>{
    //2초동안 작업처리한것으로 하자
    setTimeout(() => {
        console.log("Hello");
        resolve("hello");
    }, 2000);
});

setTimeout(() => {
    console.log(promise2);
}, 3000);

//3. promise reject 상태
const promise3 = new Promise((resolve, reject)=>{
    //2초동안 작업처리한것으로 하자
    setTimeout(() => {
        console.log("Hello");
        reject("실패하는 이유를 점검하시오");
    }, 2000);
});

setTimeout(() => {
    console.log(promise3);
}, 3000);


//4. promise 실제적용
const promise4 = new Promise((resolve, reject)=>{
    //2초동안 작업처리한것으로 하자
    //executor 처리문
    //숫자값을 주면 타입을 점검해서 number 타입이면 resolve, 아니면 reject
    setTimeout(() => {
        const num = "십"; //타입은 선언할 때가 아닌 실행될 때 적용된다
        if(typeof num === 'number'){
            resolve(num + 10);
        }else{
            reject(`${num} 은 숫자가 아닙니다.`);
        }
    }, 2000);
});

setTimeout(() => {
    console.log(promise4);
}, 3000);

//5. promise 실제적용 성공했을때와 실패했을때를 처리한다.
const promise5 = new Promise((resolve, reject)=>{
    //2초동안 작업처리한것으로 하자
    //executor 처리문
    //숫자값을 주면 타입을 점검해서 number 타입이면 resolve, 아니면 reject
    setTimeout(() => {
        const num = "십"; //타입은 선언할 때가 아닌 실행될 때 적용된다
        if(typeof num === 'number'){
            resolve(num + 10);
        }else{
            reject(`${num} 은 숫자가 아닙니다.`);
        }
    }, 2000);
});

//성공했을때 실행하는 함수로 결과를 화면에 출력
promise5.then((value)=>{
    console.log(value);
});
//실패했을때 실행하는 함수로 결과를 화면에 출력
promise5.catch((value)=>{
    console.log(value);
});

//6. promise 실제적용 성공했을때와 실패했을때를 처리한다. => 편리하게 처리
//promise 체인
promise5.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
});



//7. 함수를 통해서 promise 실행하기
//선언적인함수
function add(num){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            //const num = "십"; 타입은 선언할 때가 아닌 실행될 때 적용된다
            if(typeof num === 'number'){
                resolve(num + 10);
            }else{
                reject(`${num} 은 숫자가 아닙니다.`);
            }
        }, 5000);
    });
    return promise;
}

const promise6 = add(null);
promise6.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
});

//8. 함수를 통해서 pomise 실행하기 두번 콜백처리한다


//콜백지옥
const promise7 = add(10);
promise7.then((value)=>{
    console.log("promise 7 " + value);
    const promise8 = add(20);
    promise8.then((result)=>{
        console.log("promise 8 " + result)
    }).catch((result)=>{
        console.log("promise 8 " + result);
    });
}).catch((value)=>{
    console.log("promise 7 " + value);
});

//콜백지옥 해결
//promise chain
const promise8 = add(10);
promise8.then((value)=>{
    console.log("promise 8 " + value);
    return add(20);
}).then((result)=>{
    console.log("promise 9 " + result);
    return add(30);
}).then((data)=>{
    console.log("promise 10 " + data);
}).catch((value)=>{
    console.log("promise 8~10 " + value);
});

//음식을 주문하는 사항 promise chain 진행해보자
function orderFood(food,callback){
    console.log(food+"음식주문");
    setTimeout(() => {
        callback(food);
    }, 3000);
}

function orderFood2(flag,food){
    const promise = new Promise((resolve,reject)=>{
        console.log(food+"음식주문");
        setTimeout(() => {
            //let flag = true;
            if(flag === true){
                resolve(food+" 음식완료");
            }else{
                reject(food+" 음식실패");
            }
        }, 7000);
    });
    return promise;
}

const promise11 = orderFood2(true,"떡볶이");
promise11.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
});

function coolFood2(food){
    const promise = new Promise((resolve,reject)=>{
        console.log(food+"음식 차게 주문");
        setTimeout(() => {
            let flag = true;
            if(flag === true){
                resolve(food+" 차게음식완료");
            }else {
                reject(food+" 차게음식실패");
            }
        }, 2000);
    });
    return promise;
}
coolFood2("떡볶이").then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});


//떡볶이 음식주문 => 차게 음식주문
orderFood2(true,"떡볶이")
.then((value)=>{
    console.log(value);
    return coolFood2("떡볶이");
})
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});

