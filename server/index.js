const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

const stripe = require("stripe")(process.env.STRIPE_KEY)

app.use(express.json())
app.use(cors)


app.get('/', (req, res) => {
    res.send("hello")
})


app.listen(4242, () => console.log("working"))