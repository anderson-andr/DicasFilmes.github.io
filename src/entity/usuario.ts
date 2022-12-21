import { Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";


@Entity()
export class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id_usuario!: number;

    @Column()
    nome_usuario!: string;

    @Column()
    email!: string;

    @Column()
    senha!: string;

    @Column()
    cpf!: string;


   

}