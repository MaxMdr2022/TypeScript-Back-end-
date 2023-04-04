/*Despues de codear el archivo index.ts (crear la primer ruta etc.) En consola se hace el npm run tsc. Eso esta configuradon en el 
package.json y en el tsconfig "outDir" para que guarde acá el archivo compilado por TS.*/ 

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware que transforma la req.body en json
const PORT = 3000;
app.get("/", (_req, res) => {
    console.log("Entrando al servidor.");
    res.send("Hola Mundo!");
});
app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});
