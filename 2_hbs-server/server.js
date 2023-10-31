const express = require('express')

const app = express()

app.use(express.static('public'))
app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")

app.get('/', (req, res) => {
    console.log(__dirname)
    res.render('home-page')         // RENDER RECIBE COMO PRIMER ARGUMENTO EL NOMBRE DE LA VISTA
})                                  // COMO SEGUNDO ARGUMENTO OPCIONAL, UN - O B J E T O - CON DATOS

app.get('/detalles-alumno', (req, res) => {

    const studentInfo = {
        name: 'Sandra Pérez',
        campus: 'Madrid',
        debt: false,
        bootcamp: 'Web Development (<em>Web Dev</em>)',
        subjects: ['HTML', 'CSS', 'JS', 'EXPRESS', 'REACT'],
        teacher: undefined,
        address: undefined,
    }

    res.render('student-info', studentInfo)
})

app.listen(5005, () => console.log('Servidor levantado en puerto 5005'))