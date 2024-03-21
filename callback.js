console.log("1");
setTimeout(()=>{
    console.log("0초 경과");
},0)
setTimeout(()=>{
    console.log("2초 경과");
},2000)
console.log("2");
setTimeout(()=>{
    console.log("5초 경과"); //'2초 경과' 출력 후 5 초 후 '5초 경과'출력
},5000)
console.log("3");
// 1,2,3출력 후 0초 경과, 2초 경과, 5초 경과 출력