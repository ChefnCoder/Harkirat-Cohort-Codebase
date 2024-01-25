const fs = require("fs");
const dataToAdd = "This is a a new line";
fs.appendFile("a.txt", dataToAdd, (err)=>{
    if(err){
        console.log("Unable to Update, ERROR!!")
    }
    else{
       console.log("Data Updated!!")
    }
})

fs.readFile("a.txt","UTF-8",(err,data)=>{
    if(err){
        console.log("Unable to Access, ERROR!!")
    }
    else{
        console.log(data)
    }
})

