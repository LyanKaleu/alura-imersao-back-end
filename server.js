import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Mock -> Um objeto falso usado para testes
// Base de dados
// const posts = [
//     {
//         id: 1,
//         descricao: "Uma foto teste",
//         imagem: "https://placecats.com/millie/300/150",
//         autor: "Guilherme",
//     },
//     {
//         id: 2,
//         descricao: "Gato brincando com um novelo de lã",
//         imagem: "https://placecats.com/millie/300/150",
//         autor: "João",
//     },
//     {
//         id: 3,
//         descricao: "Gatinho dormindo em uma caixa",
//         imagem: "https://placecats.com/millie/300/150",
//         autor: "Victor",
//     },
//     {
//         id: 4,
//         descricao: "Gato olhando pela janela",
//         imagem: "https://placecats.com/millie/300/150",
//         autor: "Felipe",
//     },
//     {
//         id: 5,
//         descricao: "Gato comendo ração",
//         imagem: "https://placecats.com/millie/300/150",
//         autor: "Rogério",
//     },
//     {
//         id: 6,
//         descricao: "Gato fazendo pose para foto",
//         imagem: "https://placecats.com/millie/300/150",
//         autor: "Carlos",
//     }
// ];

// Cria uma instância do Express, que será o nosso servidor web
const app = express();

app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});