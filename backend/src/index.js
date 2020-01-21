/*

métodos http: 
get, post, put, delete

tipos de parâmetros:
query params: request.query (filtros, ordenação, paginação, ...)
route params: request.poarams (identificar um recurso na alteração ou remoção)
body: request.body (dados para criação ou alteração de um registro)

MongoDB = banco não relacional

*/

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');
const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://saulofilho:200288@omni-stack-3hduf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);