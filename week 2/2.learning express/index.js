//creating an http server
//express is a node library, but not default
//whenever u need to bring it locally open terminal and run command npm install express and then node filename.js
const express = require('express');
const app = express();

function sum(n)
{
    let ans=0;
    for(let i=1;i<=n;i++)
    {
        ans+=i;
    }
    return ans;
}

app.get("/",function(req,res){
    const n = req.query.n;
    const ans =sum(n);
    res.send("hi your ans is: " + ans);
})

app.listen(3000,()=>{console.log("bow")}) 