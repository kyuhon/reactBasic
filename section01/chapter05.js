//콜백함수 : 자바콜백함수(service, doGet, doPost)
//1. 함수 선언식
function checkMood(mood) {
    if(mood === "good"){
        String();
    }  else if(mood === "cry"){
        cry();
    }   else if (mood === "dance"){
        dance();
    }
}

function sing(){
    console.log("ACTION :: sing")
}
function cry(){
    console.log("ACTION :: cry")
}
function angry(){
    console.log("ACTION :: angry")
}
function dance(){
    console.log("ACTION :: ")
}

//콜백처리2
function repeat(){
    for(let i = 1; i<10 ; i++){
        callback(i);
        console.log(i*2+" ")
    }
}

repeat();