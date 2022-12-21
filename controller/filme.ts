import { Request, Response } from "express";
import { AppDataSource } from '../src/data-source'
import { Filme } from "../src/entity/filme";



export class FilmeController {

  
    async listar(req: Request, res: Response) {
        const datasource = await AppDataSource;
        const filmeRepository = datasource.getRepository(Filme);
        const listaServicos = await filmeRepository.find();
        res.json(listaServicos);
    }

    async inserir ( req:Request, res: any) {
        const filmeRequest = req.body;
        if(!filmeRequest || !filmeRequest.nome_filme  || !filmeRequest.descricacao || !filmeRequest.foto_capa) {
            return res.status(400).json({
                Erro:"Todos os dados são obrigatorios"
            });    
        }
       
        const filme = new Filme();
        filme.nome_filme = filmeRequest.nome_filme;
        filme.id_usuario = filmeRequest.id_usuario;
        filme.descricacao = filmeRequest.descricacao;
        filme.foto_capa = filmeRequest.foto_capa;
        const datasource = await AppDataSource;
        
        const filmeRepository = datasource.getRepository(Filme);
        const filmeSalvo = await filmeRepository.save(filme);
          res.status(201).json(filmeSalvo);


    }
    
    async delete(req: any, res: any) {
        const datasource = await AppDataSource
        const filmeRepository = datasource.getRepository(Filme);

        const id = req.params.id;
        const filme = await filmeRepository.findOneBy({id_filme:id});
         await filmeRepository.delete({id_filme:id});
            res.status(201).json({ServicoDeletado:filme});
    }

    async update (req: any, res: any) {
        const datasource = await AppDataSource
        const filmeRepository = datasource.getRepository(Filme);

        const id = req.params.id;
        const filmeRequest = req.body;
        if(!filmeRequest || !filmeRequest.nome_filme || !filmeRequest.descricacao  || !filmeRequest.foto_capa ) {
            return res.status(400).json({
                Erro:"Todos os dados são obrigatorios"
            });    
        }
    
        await filmeRepository.update(id, {nome_filme:filmeRequest.nome_filme, descricacao:filmeRequest.descricacao, foto_capa:filmeRequest.foto_capa});
        const filme = await filmeRepository.findOneBy({id_filme:id});
            res.status(201).json(filme);
    }

   async listar_Filmes_byUser ( req:Request, res: any) {
        const id = req.params.id;
        const datasource = await AppDataSource.createQueryRunner()
        const filme = await datasource.query("select * from filme a inner join usuario b on b.id_usuario"
         +" = a.id_usuario where b.id_usuario =" + id )
                 res.status(201).json(filme);



    }

    async buscarPorId(req: any, res: any) {
        const datasource = await AppDataSource;
        const produtoRepository = datasource.getRepository(Filme);
        
        const id = req.params.id;

    
        const filme = await produtoRepository.findOneBy({id_filme: id});

        res.json(filme);
    }



}