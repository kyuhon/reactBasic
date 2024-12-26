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

function checkMood2(mood, type){
    if(mood === "good"){
        if(type === 1){
            sing();
        }else{
            dance();
        }
    }else{
        if(type === 1){
            cry();
        }else{
            angry();
        }
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

//콜백처리
function checkMood3 (mood,goodCallback, badCallback){
    if(mood === "good"){
        goodCallback();
    }else{
        badCallback();
    }
};


checkMood2("good",1);

checkMood3 ("bad",()=>{
    console.log("ACTION :: dance3");
}, () =>{
     console.log("ACTION :: angry3");
 });


//콜백처리2
function repeat(idx, callback){
    for(let i = 1; i<idx ; i++){
        callback(i);
        //console.log(i**2+" ")
    }
}

repeat(5,(i) => {
    console.log(i**3);
});


