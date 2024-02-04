 const express = require("express");
 const app = express();

 const port = 3000;
 app.get("/health-checkup",function(req,res)
 {
    //checks, first we got access to data
    const kidneyid = req.query.kidneyid;
    const username = req.headers.username;
    const password = req.headers.password;
 
    //authorisation check
    if(username!="tanmay" || password!="tsh001")
    {
        res.status(403).json({
            msg:"user doesn't exist",
        });
        return;
    }

    //input validation

    if(kidneyid!=1 && kidneyid!=2)
    {
        res.status(411).json({
            msg:"wrong inputs",
        })
        return;
    }

    //now main function works starts
    res.json({
        msg: "your kidney is fine"
    })
 })

 app.listen(port,()=>{
    console.log("running on port now");
 })