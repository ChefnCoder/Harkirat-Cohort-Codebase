
//imported express,jasonwebtoken and mongoose library 
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456"; //password for accessing 

//initializes an Express application and configures it to use the express.json() middleware.
//This middleware is used to parse JSON bodies in incoming requests.
const app = express();
app.use(express.json());


//connected mongoose with our database
mongoose.connect("mongodb+srv://tanmay2020anand:iI4PZZTjNZ7GSccG@cluster0.fuh7nkb.mongodb.net/");

//defined the format of evry user we are sending in
const UserProfileSchema = mongoose.model("user", {
  name: String,
  email: String,
  pasword: String,
});



app.post("/signup", async function (req, res) {
    //step 1 , took username pasword from body
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;  

    //step 2 , checked whether username already exists
    const existingUser = await UserProfileSchema.findOne({email:email});
    
    //if no err till now then try this code -> 
    // output when user exists
    if (existingUser){
        return res.status(400).json({
            "msg" : "username already exists",
        });
    }

    //else case->
    //we made a new user object and then saved it
    const user = new UserProfileSchema({
        name: name,
        email : email,
        password:password
    });

    //another try and catch for saving , if ever it faces problem would be easier to detect
    try{
        user.save();
        res.json({
            "msg" : "user saved successfully",
        })
    }catch{
        res.json({
            "msg" : "problem in saving",
        })
    }
    
});

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
});
