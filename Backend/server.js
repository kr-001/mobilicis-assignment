const express = require('express');
const cors = require("cors");


require('./db/config')

const Data = require('./db/samples');

//Express Application
const app = express();
app.use(cors());
app.use(express.json());

app.get("/data", async (req, res) => {
    const objects = await Data.find();
    if(objects.length > 0){
        res.send(objects);
    }else{
        res.send([]);
    }
});

app.get("/condition1" , async (req,res)=>{
   const objects = await Data.find({
        income : {$lt : "$5"},
        car : {$in :["BMW" , "Mercedes"]}
    })
    if(objects.length > 0){
        res.send(objects);
    }else{
        res.send(["NO Data"])
    }
})

app.get("/condition2" , async (req,res)=>{
    const objects = await Data.find({
        gender : {$eq : "Male"},
        phone_price :{$gt : "10000"}
    })
    if(objects.length > 0){
        res.send(objects);
    }else{
        res.send(["NO Data"]);
    }
})

app.get("/condition3" , async (req,res)=>{
    const objects = await Data.find({
        last_name : /^M/,
        $expr : {$gt : [{$strLenCP : "$quote"},15]},
        email : {$regex : /M$/i}
    })
    if (objects.length > 0){
        res.send(objects);
    }else{
        res.send(["NO Data"]);
    }
})

app.get("/condition4" , async (req, res) => {
    const objects = await Data.find({
        car : {$in : ["BMW" , "Mercedes" , "Audi"]},
        email : {$not :{$regex : /\d/}}
    })
    if (objects.length > 0){
        res.send(objects);
    }else{
        res.send(["NO Data"]);
    }
})

app.get("/condition5" , async (req, res) => {
    const objects = await Data.aggregate([
        { $group: { _id: "$city", count: { $sum: 1 }, total_income: { $sum: {$convert : {input : {$substr : ["$income" , 1 , -1]}, to : 19}}}} } ,
        { $sort: { count: -1 } },
        { $limit: 10 },
        { $project: { _id: 1, count: 1, average_income: {$round : [{ $divide: ["$total_income", "$count"] },2]} } }
      ])
    if(objects.length > 0) {
        res.send(objects);
    }else{
        res.send(["No data found"]);
    }
})



app.listen(5000);