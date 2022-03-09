const express = require("express");
var bodyParser = require('body-parser');
const user = require("./model/user");
const mongoose = require('mongoose');
const { on } = require("./model/user");
var methodOverride = require('method-override')

const app = express();

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost:27017/assignment_4');

app.use(express.urlencoded({ extended: true, }));

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser());


app.get("/", async( req, res)=>{
    const users = await user.find()
    res.render("index.ejs", {users})
})

app.get("/form",( req, res)=>{
    //write the code to fetch the data
    res.render("form.ejs")
})


app.post("/user/add",async ( req, res)=>{
    // add code to write code in database
    // console.log(req.body)
    const {name, email, isPromoted} = req.body;
    await user.create({
        name, email, isPromoted
    })
    res.redirect("/");
})

app.put("/user/:id/promote",async ( req, res)=>{
    await user.updateOne(
        {_id: req.params.id}, {isPromoted: true}
    )
    res.redirect("/");
})

app.put("/user/:id/demote",async ( req, res)=>{
    await user.updateOne(
        {_id: req.params.id}, {isPromoted: false}
    )
    res.redirect("/");
})

app.delete("/user/:id",async ( req, res)=>{
    await user.deleteOne(
        {_id: req.params.id}, {selected:true}
    )
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("server is listening");
})