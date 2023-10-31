const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(`
        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>La web de Popino</title>
            <link rel="stylesheet" href="/css/style.css">
        </head>
        <body>
            <h1>Popino</h1>
            <hr>
            <p>¡Qué bien tenerte aquí!</p>
            <p>Puedes ver a Popino <a href="/galeria">en este enlace</a></p>
        </body>
        </html>`);
})

app.get('/galeria', (req, res) => {
    res.send(`
        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>La web de Popino</title>
            <link rel="stylesheet" href="/css/style.css">
        </head>
        <body>
            <h1>Galería de Popino</h1>
            <hr>
            <img src="/img/popino.jpeg">
            <p><a href="/">Volver al inicio</a></p>
        </body>
        </html>`);
})

app.listen(5005, () => console.log('SERVIDOR LEVANTADO'))