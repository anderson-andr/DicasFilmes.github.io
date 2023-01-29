import { Usuario } from './entity/usuario';
import { Filme } from './entity/filme';
import { Atores } from './entity/atores';
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "db",
    database: "best_movies",
    synchronize: true,
    logging: true,
    entities: [Usuario,Filme, Atores],
    subscribers: [],
    migrations: [],
})
