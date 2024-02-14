const mongoose = require("mongoose")

const connectDB = (url) => {
    try {
       return mongoose.connect(url).then(() => { console.log("Database connected succesfully...")})
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB