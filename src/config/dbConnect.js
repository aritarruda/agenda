import  mongoose  from "mongoose";

mongoose.connect(
    "mongodb+srv://admin:ana123@cluster0.cwq5fha.mongodb.net/agenda"

);

let db = mongoose.connection;

export default db;



