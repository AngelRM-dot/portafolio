const express = require('express');
const path = require('path');
const app = express();
const datos = require('./data/datos.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { datos });
});

app.get('/about', (req, res) => {
    res.render('about', { datos });
});

app.get('/cv', (req, res) => {
    res.render('cv', { datos });
});

app.get('/projects', (req, res) => {
    res.render('projects', { datos });
});

app.get('/contact', (req, res) => {
    res.render('contact', { datos });
});

app.use((req, res, next) => {
    res.status(404).render('error', { 
        datos,
        error: {
            code: 404,
            message: 'Página no encontrada'
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});