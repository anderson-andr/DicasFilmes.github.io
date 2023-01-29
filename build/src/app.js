"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("iniciando banco de dados");
})).catch(error => console.log(error));
const cors = require('cors');
const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
};
const usuario_1 = __importDefault(require("../rotas/usuario"));
const filme_1 = __importDefault(require("../rotas/filme"));
const atores_1 = __importDefault(require("../rotas/atores"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(cors(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/usuario', usuario_1.default);
app.use('/api/filme', filme_1.default);
app.use('/api/ator', atores_1.default);
app.listen(PORT, () => {
    console.log("Iniciando na porta " + PORT);
});
