import { Request, Response } from "express";
import { AppDataSource } from '../src/data-source'
import { Usuario } from '../src/entity/usuario';


export class UsuarioController {

    
    async listar(req: Request, res: Response) {
        const datasource = await AppDataSource;
        const usuarioRepository = datasource.getRepository(Usuario);
        const listaServicos = await usuarioRepository.find();
        res.json(listaServicos);
    }

    async inserir ( req:Request, res: any) {
        const usuarioRequest = req.body;
        if(!usuarioRequest || !usuarioRequest.nome_usuario || !usuarioRequest.email || !usuarioRequest.senha || !usuarioRequest.cpf) {
            return res.status(400).json({
                Erro:"Todos os dados são obrigatorios"
            });    
        }
    
        const usuario = new Usuario();
        usuario.nome_usuario = usuarioRequest.nome_usuario;
        usuario.email = usuarioRequest.email;
        usuario.senha = usuarioRequest.senha;
        usuario.cpf = usuarioRequest.cpf;
        const datasource = await AppDataSource;
        
        const usuarioRepository = datasource.getRepository(Usuario);
        const usuarioSalvo = await usuarioRepository.save(usuario);
          res.status(201).json(usuarioSalvo);


    }

    async delete(req: any, res: any) {
        const datasource = await AppDataSource
        const usuarioRepository = datasource.getRepository(Usuario);

        const id = req.params.id;
        const usuario = await usuarioRepository.findOneBy({id_usuario:id});
         await usuarioRepository.delete({id_usuario:id});
            res.status(201).json({ServicoDeletado:usuario});
    }

    async update (req: any, res: any) {
        const datasource = await AppDataSource
        const usuarioRepository = datasource.getRepository(Usuario);

        const id = req.params.id;
        const usuarioRequest = req.body;
        if(!usuarioRequest || !usuarioRequest.nome_usuario || !usuarioRequest.email  || !usuarioRequest.senha || !usuarioRequest.cpf ) {
            return res.status(400).json({
                Erro:"Todos os dados são obrigatorios"
            });    
        }
    
        await usuarioRepository.update(id, {nome_usuario:usuarioRequest.nome_usuario, email:usuarioRequest.email, senha:usuarioRequest.senha, cpf:usuarioRequest.cpf});
        const usuario = await usuarioRepository.findOneBy({id_usuario:id});
            res.status(201).json(usuario);
    }


    async buscarPorId(req: any, res: any) {
        const datasource = await AppDataSource;
        const produtoRepository = datasource.getRepository(Usuario);
        
        const id = req.params.id;

    
        const filme = await produtoRepository.findOneBy({id_usuario: id});

        res.json(filme);
    }


}

