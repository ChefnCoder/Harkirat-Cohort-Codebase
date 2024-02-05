const express = require('express');
const app = express();
const zod = require('zod');
app.use(express.json());

//Zod schema for validating email, password, country, and an array of kidneys.
const schema = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal('IN').or(zod.literal('US')),
  kidneys: zod.array(zod.number())
});

app.post('/register', (req, res) => 
{
	const userData = req.body;

  // Validate user data against the Zod schema
  const validationResult = schema.safeParse(userData);

	if (validationResult.success) {
    // If validation is successful, process the user data
    const { username, email, age } = validationResult.data;
    res.json({ success: true, message: 'User registered successfully', user: { username, email, age } });
  } else {

    // If validation fails, send an error response
    res.status(400).json({ success: false, errors: validationResult.error.errors });
  } 
})

const port =3000;
app.listen(port,()=>{
    console.log('app is running on port 3000');
})