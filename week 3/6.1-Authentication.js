
//imported express and jwt and made password by ourself
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

//initializes an Express application and configures it to use the express.json() middleware.
//This middleware is used to parse JSON bodies in incoming requests.
const app = express();
app.use(express.json());

//array of object : our in memory db
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// .some and .find are function of array through which it checks for the value and return true false for .some()
// and something praticular abt the indx in .find()
function userExists(username, password) {
  return ALL_USERS.some(i => i.username === username && i.password === password);
}


app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  // jwt.sign(): This function is used to generate a new JWT. 
  // It takes two arguments: the payload and a secret or private key. 
  var token = jwt.sign({ username: username }, jwtPassword);

  return res.status(200).json({
    token
  });
});

app.get("/users", function (req, res) {
  // retrive token from header
  const token = req.headers.authorization;
  console.log("token is: "+token);
  //run this part , if face error run catch part
  
  try {
    const decoded = jwt.verify(token, jwtPassword);
    console.log(decoded);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        //this filter function filters out object to print
        users: ALL_USERS.filter (function(value) {
            if (value. username == username) return false 
                else return true;
            })
    })    
    
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token"
    });
  }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});