const fs = require("fs");
fs.readFile("filetobecleaned.txt","UTF-8",(err,data)=>{
    if(err)
    {
        console.log("ERROR!!!")
    }else{
        const str = data;
        let trimmedStr = str.replace(/ +(?= )|\t+/g, '');
        console.log(trimmedStr);
    }
})