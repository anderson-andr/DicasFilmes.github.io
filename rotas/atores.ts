
import { Router } from 'express';
import { AtorController } from '../controller/atores';

const rota = Router();
const controller = new AtorController();

//Rota: /api/filme
rota.get('/', controller.listar);

rota.post('/', controller.inserir);

rota.get('/:id',controller.buscarPorId);

rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);

rota.get('/elenco/:id', controller.listar_Eleco_ByFilme);


export default rota;