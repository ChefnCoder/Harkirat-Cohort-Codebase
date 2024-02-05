const express= require("express");
const app = express();
const port=3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//middlewares
function usermiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username!="tanmay" || password!="tsh001")
    {
        res.status(403).json({
            msg:"user doesn't exist",
        });
        return;
    } next();
}

function kidneymiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId!=1 && kidneyId!=2)
    {
        res.status(411).json({
            msg:"wrong inputs",
        })
        return;
    }next();
}


app.get("/health-checkup",usermiddleware,kidneymiddleware,(req,res)=>{

     
    res.json({
        msg: "kidney is fine!!"
    })
})

app.post("/getkidneyinfo",usermiddleware,kidneymiddleware,(req,res)=>{

    let kidney = req.body.kidney;
    let kidneycount = kidney.length;
    res.json({
        msg:"eroor bro"
    })
})

app.use(function (err, req, res, next) {
    res.json({
      msg: "Sorry, something is up with our server"
    });
  });


app.listen(port,()=>{
    console.log('app is running on port 3000');
})