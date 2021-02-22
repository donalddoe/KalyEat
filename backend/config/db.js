const mongoose = require('mongoose');

const connectDB = async () => {
    console.log(process.env.DATABASE_ACCESS)
    const connection = await mongoose.connect("mongodb+srv://kalyeat:donnydoe@22@kalyeat.ko0of.mongodb.net/mytable?retryWrites=true&w=majority", 
    {useNewUrlParser: true}, 
 { useUnifiedTopology: true }
    )
    console.log(`MongoDB conneted: ${connection.connection.host}`) 
}

module.exports = connectDB