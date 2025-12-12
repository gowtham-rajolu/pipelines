const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    app.send("hello")
})
app.listen(3000)
console.log("learning pipe lines")