import { Router } from 'express';
import { UsuarioController } from '../controller/usuario';

const rota = Router();
const controller = new UsuarioController();

//Rota: /api/servicos
rota.get('/', controller.listar);
rota.post('/', controller.inserir);
rota.delete('/:id', controller.delete);
rota.put('/:id', controller.update);

export default rota;