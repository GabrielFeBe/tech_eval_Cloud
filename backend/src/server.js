const server = require('./app');
// tenta pegar a porta das variaveis de ambiente ou use a porta padrão que é a 3001;
const PORT = process.env.PORT || 3001;

// Inicia o servidor na porta especificada;
server.listen(Number(PORT), () => {
    console.log(`Server is running on port ${PORT}`);
});