const mongoose = require("mongoose")
const express = require("express")
const app = express()
require("dotenv").config()
const Product = require("./models/products")
const connectDB = require("./db/connect")
const notFound = require("./middlewares/not-found")
const productRouter = require('./routes/products')

// middleware
app.use(express.json())

// route
app.use("/api/v1/products", productRouter)

// error handling Middlewares
app.use(notFound)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => { console.log(`server is running at ${port}`) })

    } catch (error) {
        console.log(error);
    }
}

start()
