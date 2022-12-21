
import { Router } from 'express';
import { FilmeController } from '../controller/filme';

const rota = Router();
const controller = new FilmeController();

//Rota: /api/filme
rota.get('/', controller.listar);

rota.post('/', controller.inserir);
rota.get('/:id',controller.buscarPorId);

rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);

rota.get('lista/:id', controller.listar_Filmes_byUser);


export default rota;