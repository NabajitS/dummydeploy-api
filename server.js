const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors")

const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(cors())
app.get('/', async (req, res) => {

    const dataSend = [
        {
            "id": 1,
            "name": "Pizaa"
        },
        {
            "id": 2,
            "name": "Burger"
        },
        {
            "id": 3,
            "name": "Fries"
        }
    ]

    res.status(200).json({
        dataSend
    })
})



app.listen(process.env.PORT, () => {
    console.log("App running on port ", process.env.PORT)
})