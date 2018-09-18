const express=require("express");
//const Mongodb=require("mongodb");//Mongodb.Client ,Mongodb.ObjectID
const {MongoClient, ObjectID}=require('mongodb');
const BodyParser=require('body-parser');
const assert=require('assert');
const app=express();
app.use(BodyParser.json())

const URL_Mongodb="mongodb://localhost:27017";
const DataBase="Test-database"
MongoClient.connect(URL_Mongodb,{ useNewUrlParser: true },(err,Client)=>{
assert.equal(err,null,'data base connect failed')
const db=Client.db(DataBase);
app.post('/Add',(req,res)=>{
let newadd=req.body;
db.collection('products').insertOne(newadd,(err,data)=>{
    if(err){res.send("can't connect to")}
    else res.send('product added')



})

})
/*app.get("/Products",(req,res)=>{
    db.collection('products').find().toArray((err,data)=>{
        if(err){res.send("can't connect to")}
        else res.send(data)

    })


})*/
/*app.get("/Products/:id",(req,res)=>{
let  serchProdectbyId= ObjectID(req.params.id)
    db.collection('products').findOne({_id : serchProdectbyId},(err,data)=>{
        if(err){res.send("can't connect to")}
        else res.send(data)
    })
})*//*
app.put("/Modifier/:id",(req,res)=>{

    let id =ObjectID(req.params.id);
    let Modifier=req.body
    db.collection('products').findOneAndUpdate({_id : id},{...Modifier},(err,data)=>{
        if(err){res.send("can't connect to")}
        else res.send("product was Modified")
    })
    app.delete("/delete/:id",(req,res)=>{
        let id =ObjectID(req.params.id);
        db.collection('products').findOneAndUpdate({_id : id},(err,data)=>{
            if(err){res.send("can't delet Prodect")}
            else res.send("product was deleted")
     })


    })
})*/
})
app.listen( 3000,(err)=>{
    if(err)
    { console.log("server err");}
    else
    {console.log("server is runing on port 3000")}
})