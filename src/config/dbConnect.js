import  Mongoose  from "mongoose";

Mongoose.connect(
    "mongodb+srv://admin:<password>@anarita.lqarr9u.mongodb.net/?retryWrites=true&w=majority"

);

let db = mongoose.connection;

export default db;



//mongodb+srv://admin:<password>@anarita.lqarr9u.mongodb.net/?retryWrites=true&w=majority