const express = require('express');
var cors = require('cors');
const app = express();
require('dotenv').config();
// const Categories = require('./models/Categories');
// const Products = require('./models/Products');
// const Users = require('./models/Users');
const router = require('./routes/index');

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    app.use(cors());
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send('API Iniciada com sucesso !');
});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado na porta ${process.env.PORT} "${process.env.DB_HOST}"`);
}); 