
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany,JoinColumn } from "typeorm";

@Entity()
export class Atores extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_ator: number;

    @Column()
    nome_ator!: string;

    @Column()
    foto_ator!: string;

    @Column()
    descricao!: string;

    @Column()
    id_filme!: number;
   


 

}