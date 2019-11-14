const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// Para conectar MongDB vamos a usar Mongoose, lo siguiente retornará una promesa
const connectDB = async () => {
  try{
    console.log(config.get('mongoURI'))
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log('MongoDB connected...');
    
  }catch(err){
    console.log(err.message);
    //Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;