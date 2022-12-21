
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Filme extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_filme!: number;

    @Column()
    nome_filme!: string;
    
    @Column()
    id_usuario!: number;

    @Column()
    foto_capa!: string;

    @Column()
    descricacao!: string;



    
 

}