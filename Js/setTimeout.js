setTimeout(function(){
    console.log("venkat")
},5000)

setInterval(function(){
    console.log("setInterval - venkat")
},1000)

console.log("a")
console.log("b")
setTimeout(()=>{
    console.log("C");
},1000)

setTimeout(()=>{
    console.log("D");
},100)

console.log("e");