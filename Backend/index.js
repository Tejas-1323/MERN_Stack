const express = require('express')
const connectDB = require('./db')
const app = express()
const port =3001
connectDB();

app.get('/helthCheck',(req,res)=>{
    res.status(200).send({message:"my application working fine !!!!!",status:"Good"})
})
app.listen(port,()=>{
console.log(`Server is running on ${port}`);

})
