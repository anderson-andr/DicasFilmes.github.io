
import express from "express";
import { AppDataSource } from "./data-source"
AppDataSource.initialize().then(async () => {

    console.log("iniciando banco de dados")
}).catch(error => console.log(error));

const cors = require('cors');
const corsOptions = {
    origin: '*' ,
    optionSuccessStatus:200
  };





import rotaUsuario from '../rotas/usuario';
import rotaFilme from '../rotas/filme';

import rotaAtor from '../rotas/atores';

const app = express();
const PORT = 3000;


app.use(cors(corsOptions));


app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/api/usuario', rotaUsuario);

app.use('/api/filme', rotaFilme);
app.use('/api/ator', rotaAtor);

app.listen(PORT, () => {
    console.log("Iniciando na porta "+PORT);
})


