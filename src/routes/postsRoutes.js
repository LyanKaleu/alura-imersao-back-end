import express from "express"; // Importa o módulo Express para criar o servidor web
import multer from "multer"; // Importa o módulo Multer para lidar com uploads de arquivos
import cors from "cors";

// Importa funções controladoras de posts do arquivo postsController.js
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

// Configura o armazenamento de arquivos para o upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) { // Define o diretório de destino dos uploads
    cb(null, 'uploads/'); // Caminho para a pasta 'uploads'
    },
    filename: function (req, file, cb) { // Define o nome do arquivo
    cb(null, file.originalname); // Utiliza o nome original do arquivo
    }
});

// Define a configuração de upload para Windows (substitua se necessário)
const upload = multer({ dest: "./uploads", storage }); 

// Define a configuração de upload para Linux ou Mac (substitua se necessário)
// const upload = multer({ dest: "./uploads" });

// Função para configurar as rotas da aplicação
const routes = (app) => {
    // Permite ao Express analisar o corpo das requisições JSON
    app.use(express.json());

    app.use(cors(corsOptions));

    // Rota GET para listar todos os posts (tratada pela função listarPosts)
    app.get("/posts", listarPosts);

    // Rota POST para criar um novo post (tratada pela função postarNovoPost)
    app.post("/posts", postarNovoPost);

    // Rota POST para upload de imagem (usa o middleware upload.single('imagem') e chama a função uploadImagem)
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarNovoPost);
};

export default routes; // Exporta a função routes para uso em outros arquivos