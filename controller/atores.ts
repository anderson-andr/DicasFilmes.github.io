
import { Request, Response } from "express";
import { AppDataSource } from '../src/data-source'
import { Atores } from "../src/entity/atores";



export class AtorController {

  
    async listar(req: Request, res: Response) {
        const datasource = await AppDataSource;
        const atoresRepository = datasource.getRepository(Atores);
        const listaAtores = await atoresRepository.find();
        res.json(listaAtores);
    }

    async inserir ( req:Request, res: any) {
        const atoresRequest = req.body;
        if(!atoresRequest || !atoresRequest.nome_ator || !atoresRequest.descricao || !atoresRequest.foto_ator || !atoresRequest.id_filme ) {
            return res.status(400).json({
                Erro:"Todos os dados são obrigatorios"
            });    
        }
       
        const atores = new Atores();
        atores.nome_ator = atoresRequest.nome_ator;
        atores.descricao = atoresRequest.descricao;
        atores.foto_ator = atoresRequest.foto_ator;
        atores.id_filme= atoresRequest.id_filme
        const datasource = await AppDataSource;
        
        const atoresRepository = datasource.getRepository(Atores);
        const atorSalvo = await atoresRepository.save(atores);
          res.status(201).json(atorSalvo);


    }
    async delete(req: any, res: any) {
        const datasource = await AppDataSource
        const atoresRepository = datasource.getRepository(Atores);

        const id = req.params.id;
        const atores = await atoresRepository.findOneBy({id_ator:id});

        
         await atoresRepository.delete({id_ator:id});
            res.status(201).json({AtorDeletado:atores});
    }

    async update (req: any, res: any) {
        const datasource = await AppDataSource
        const atoresRepository = datasource.getRepository(Atores);

        const id = req.params.id;
        const atoresRequest = req.body;
        if(!atoresRequest || !atoresRequest.nome_ator || !atoresRequest.descricacao || !atoresRequest.foto_ator ) {
            return res.status(400).json({
                Erro:"Todos os dados são obrigatorios"
            });    
        }
    
        await atoresRepository.update(id, {
            
            nome_ator:atoresRequest.nome_ator, descricao:atoresRequest.descricacao, foto_ator:atoresRequest.foto_ator});
        const atores = await atoresRepository.findOneBy({id_ator:id});
            res.status(201).json(atores);
    }

    async buscarPorId(req: any, res: any) {
        const datasource = await AppDataSource;
        const atoresRepository = datasource.getRepository(Atores);
        
        const id = req.params.id;

    
        const atores = await atoresRepository.findOneBy({id_ator: id});

        res.json(atores);
    }


    async listar_Eleco_ByFilme ( req:Request, res: any) {
        const id = req.params.id;
        const datasource = await AppDataSource.createQueryRunner()
        const atores = await datasource.query("select * from atores "
         +" where id_filme =" + id )
                 res.status(201).json(atores);



    }

}