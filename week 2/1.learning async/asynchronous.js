// var can be redeclared in a code again, but let and const are non re-declarable.
//const is also non re-assignable.

/* MAP FUNCTION 


*/


//callback
/* 
function outerone(cb){
    setTimeout(()=>{
        console.log("3 sec over");
        cb(10);
    },3000)
    console.log("started");
    
}
function ondone(a){
    console.log(a);
}

outerone(ondone);
*/

//promise
/*
function outerone()
{
  let p = new Promise(function(resolve){
    console.log("promise starts")
    setTimeout(function(){
        console.log("resolve sent after 3 sec")
        resolve(10);
    },3000)
  })
  return p;
}

function ondone(a)
{
    console.log("ondone starts")
    console.log(a);
}

outerone().then(ondone);
*/

//async await
/*
function outerone() //same as promise
{
  let p = new Promise(function(resolve){
    console.log("promise starts")
    setTimeout(function(){
        console.log("resolve sent after 3 sec")
        resolve(10);
    },3000)
  })
  return p;
}
function ondone(a) //same as promise 
{
    console.log("ondone starts")
    console.log(a);
}

//async format
async function main(){
    const value = await outerone();
    ondone(value);
}
main();
*/