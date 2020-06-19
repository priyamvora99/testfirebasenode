const express=require('express')
const bodyParser=require('body-parser')
const firebase=require('firebase/app')
require('firebase/database')


const app=express()

app.use(bodyParser.json())

var firebaseapp=firebase.initializeApp({
    apiKey: "AIzaSyCDbgUULv7dsTgfSALFu_P1jyY8wvexGs8",
    authDomain: "nodefirebasetest-e5d8b.firebaseapp.com",
    databaseURL: "https://nodefirebasetest-e5d8b.firebaseio.com",
    projectId: "nodefirebasetest-e5d8b",
    storageBucket: "nodefirebasetest-e5d8b.appspot.com",
    messagingSenderId: "409215339613",
    appId: "1:409215339613:web:a52e1c5e11c1283944d1b4"
})

var database=firebase.database()




app.post("/postToFirebase",(req,res)=>{
    var name=req.body.name
    var age=req.body.age
    database.ref().set({
        name,
        age
    }).catch((err)=>{
        console.log(err);
    })
})

app.listen(3000,(req,res)=>{
    console.log("listening to port 3000");
})