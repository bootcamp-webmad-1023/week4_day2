const express = require('express')
const hbs = require('hbs')

const app = express()

app.use(express.static('public'))
app.set("views", `${__dirname}/views`)
app.set("view engine", "hbs")
hbs.registerPartials(`${__dirname}/views/partials`)

app.get('/', (req, res) => {
    res.render('home-page')
})

app.get('/jugadores', (req, res) => {

    const playersData = [
        {
            name: "Rusell",
            lastName: "Westbrook",
            team: "OKC",
            photo: "https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg"
        },
        {
            name: "Kevin",
            lastName: "Durant",
            team: "GSW",
            photo: "https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top"
        },
        {
            name: "Lebron",
            lastName: "James",
            team: "CLE",
            photo: "https://estaticos-cdn.sport.es/clip/5132a9eb-7951-4082-99b6-08a5d21cbcb4_alta-libre-aspect-ratio_default_0.jpg"
        },
        {
            name: "Emanuel",
            lastName: "Ginóbilli",
            team: "SAS",
            photo: "https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg"
        },
        {
            name: "Kyrie",
            lastName: "Irving",
            team: "BOS",
            photo: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf",
        }
    ]

    res.render('players-page', { players: playersData })            // OJO: un objeto
})

app.listen(5005, () => console.log('Server listening on port 5005'))