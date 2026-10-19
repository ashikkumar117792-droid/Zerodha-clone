require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel} = require("./models/PositionsModel");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/addHoldings", (req,res)=>{
//     let tempHoldings = [
//         {
//             name: "BHARTIAIRTEL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "RELIANCE",
//             qty: 2,
//             avg: 1250.50,
//             price: 1265.75,
//             net: "+1.22%",
//             day: "+0.85%",
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3450.00,
//             price: 3480.25,
//             net: "+0.88%",
//             day: "+0.65%",
//         },
//         {
//             name: "INFY",
//             qty: 5,
//             avg: 1480.20,
//             price: 1495.60,
//             net: "+1.04%",
//             day: "+0.72%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 3,
//             avg: 1650.00,
//             price: 1642.50,
//             net: "-0.45%",
//             day: "-0.30%",
//         },
//         {
//             name: "ITC",
//             qty: 10,
//             avg: 420.50,
//             price: 425.80,
//             net: "+1.26%",
//             day: "+0.95%",
//         },
//     ];

//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         newHolding.save();
//     });
//     res.send("Done!");
// });




// app.get("/addPositions", (req,res)=>{
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "RELIANCE",
//             qty: 2,
//             avg: 1250.50,
//             price: 1265.75,
//             net: "+1.22%",
//             day: "+0.85%",
//             isLoss: false,
//         },
//         {
//             product: "MIS",
//             name: "TCS",
//             qty: 1,
//             avg: 3450.00,
//             price: 3480.25,
//             net: "+0.88%",
//             day: "+0.65%",
//             isLoss: false,
//         },
//         {
//             product: "CNC",
//             name: "INFY",
//             qty: 5,
//             avg: 1480.20,
//             price: 1465.60,
//             net: "-0.99%",
//             day: "-0.72%",
//             isLoss: true,
//         },
//         {
//             product: "MIS",
//             name: "HDFCBANK",
//             qty: 3,
//             avg: 1650.00,
//             price: 1642.50,
//             net: "-0.45%",
//             day: "-0.30%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "ITC",
//             qty: 10,
//             avg: 420.50,
//             price: 425.80,
//             net: "+1.26%",
//             day: "+0.95%",
//             isLoss: false,
//         },
//     ];

//     tempPositions.forEach((item) => {
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPosition.save();
//     });
//     res.send("Done!");
// });


app.get('/allHoldings', async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async(req,res)=>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();

    res.send("order saved!");
})

app.listen(PORT, ()=> {
    console.log("App started");
    mongoose.connect(uri);
    console.log("DB connected");

});