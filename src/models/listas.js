import  Mongoose  from "mongoose";
const listaSchema = new Mongoose.Schema({
    nome: {type: String, required: true},
    telefone: {type: String, required: false},
    email: {type: String, required: false},
    whatsapp: {type: Boolean, required: false},
});

const Lista = Mongoose.model("Lista",listaSchema);

export default Lista;