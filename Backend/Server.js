import express from 'express'
import { mongoose } from 'mongoose';
 
// mongoose.connect('mongodb+srv://chiragsharmadeveloper:FFRjnLNEDiW9mUqM@cluster0.ohix3zw.mongodb.net/')
// .then(() =>('mongodb connected successfully '))
// .catch((err)=> console.error( 'Connection Faild ', err));


const app=express();

app.get('/', (req,res)=>{
    res.send('Hello From Express')
})
app.get('/aboutUS', (req,res)=>{
    res.send('Hello From about US')
})
app.get('/contactUS', (req,res)=>{
    res.send('Hello From contact Us')
})
app.listen(3001, ()=>{
    console.log('Server Started')
})


// Db key 
// mongodb+srv://chiragsharmadeveloper:FFRjnLNEDiW9mUqM@cluster0.ohix3zw.mongodb.net/