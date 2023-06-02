const express=require('express');
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
let arr=[];

app.get('/',(req,res)=>{
    // res.send('hello this is sample')
    res.render('index',{detailsArray:arr})
})

app.post('/',(req,res)=>{
    // res.send('data added')
     arr.unshift(req.body.uname);
     res.redirect('/');
})
app.listen(550,()=>console.log("ready and go"))