const express=require('express')
const app=express()
const ejs=require("ejs")
const fileupload=require("express-fileupload")
app.set("view engine","ejs");

//middleware
app.use(express.json());
app.use(fileupload(
    fileupload({useTempFiles:true,
    tempFileDir:"/tmp/"})
));
app.use(express.urlencoded({extended:true}))

app.get("/myget",(req,res)=>{
    console.log(req.body);
    res.render("getform.ejs")

})
app.get("/mypost",(req,res)=>{
    console.log(req.body);
    res.render("postform")

})
app.get("/today",(req,res)=>{
    res.send(req.body)
})
app.get("/",(req,res)=>{
    console.log("rocky");
    res.send("rocky");
})
app.get("/rubel",(req,res)=>{
    res.send("fucking guys");
})
app.get('/myname',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.listen(4000,()=>{
    console.log(`server is running on port 4000`)
});