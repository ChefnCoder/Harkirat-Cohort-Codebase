const fs = require("fs");
const dataToWrite = "This is a a new line";
fs.writeFile("a.txt", dataToWrite, (err)=>{
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

