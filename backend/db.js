const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://ashishdubey9911:Pa55ward%3F%3F%3F%3F@cluster0.avnh6tq.mongodb.net/e-notebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to DB!'))
    .catch(error => console.log(error))
}

module.exports = connectToMongo;