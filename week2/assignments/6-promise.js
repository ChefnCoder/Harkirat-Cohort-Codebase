let n=10;
n*=1000;

function outerfunction() { 
    return new Promise(function(resolve) {
        setTimeout(()=>{
            resolve("hey i am back after "+n+" sec")
        },n)
    })
  }
  
  function function2(data) {
    console.log(data)
  }
  
  outerfunction().then(function2);