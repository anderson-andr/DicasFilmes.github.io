"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const usuario_1 = require("./entity/usuario");
const filme_1 = require("./entity/filme");
const atores_1 = require("./entity/atores");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "db",
    database: "best_movies",
    synchronize: true,
    logging: true,
    entities: [usuario_1.Usuario, filme_1.Filme, atores_1.Atores],
    subscribers: [],
    migrations: [],
});
