const fs = require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
   if(err)
   {
     console.log("here's a error");
   }
   else
   {
      console.log(data);
   }
});