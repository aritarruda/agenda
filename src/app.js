import express , {json} from "express";
import index from "./routes/index.js";
import db from "./config/dbConnect.js";
import listas from "./routes/lista.js";
import chalk from "chalk";

const app = express();

app.use(json());
app.use("/",index);
app.use("/lista",listas);

db.on("erro",console.log.bind(console, "errode conexao"));
db.once("open",() => {
    console.log(chalk.blue.bgGreen.bold("conexao com o banco feita com sucesso"));
});