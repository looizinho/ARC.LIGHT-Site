const express = require('express');
const app = express();
const path = require('path');

// Configura a pasta 'public' como fonte de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
