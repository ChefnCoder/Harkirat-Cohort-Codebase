const express = require('express');
const app = express();

//user is an array of object name and kidney, kidney is again array of object healthy
const user=[{
    name: "tanmay",
   // kidney is a array of object
    kidney: [
        {healthy : true},
        {healthy : false},
        {healthy : false},
        {healthy : false}
    ]
}];
app.use(express.json());

//get to get data from db
app.get("/",function(req,res){
    const tanmayKidney = user[0].kidney;
    const numberOfKidney = tanmayKidney.length;

    
    let numberOfHealthyKidneys = 0;

    for(let i=0;i<numberOfKidney;i++)
    {
        if(tanmayKidney[i].healthy)
        {
            numberOfHealthyKidneys+=1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidney-numberOfHealthyKidneys;

    res.json({
        numberOfKidney,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.listen(3000);

//post to add data on db
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].kidney.push(
        {healthy: isHealthy}
    )

    res.json({
        msg:"done"
    })
})

//put to update current data in db
app.put("/",function(req,res){
    for(let i=0;i<user[0].kidney.length;i++)
    {
        user[0].kidney[i].healthy = true;
    }

    res.json({
        msg:"done"
    });
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<user[0].kidney.length; i++) {
        if (!user[0].kidney[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.delete("/",function(req,res){
    if(isThereAtleastOneUnhealthyKidney()) {
    const newKidney = [];
    for(let i=0;i<user[0].kidney.length;i++)
    {
        if(user[0].kidney[i].healthy){
            newKidney.push({
                healthy:true
            })
        }


    }

    user[0].kidney = newKidney;
    res.json({msg:"done"})
    }else
    {
        res.status(411).json({msg: "You have no tatti kidney"})
    }
})