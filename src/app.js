
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const path = require("path")
const public1 = path.join(__dirname, '../public')
app.use(express.static(public1))
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        title: "Enter Any Country"
        
    })
})



const geocode = require('./data/data1')
const forecast = require('./data/data2')

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide address'
        })
    }
 
geocode(req.query.address, (error, data) => {
    if (error) {

        return res.send({ error })
    }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return res.send({ error })
        }
        res.send({
            location: req.query.address,
             geocode1:data,
           
            forecast: forecastData,

        })
    })
})
})
         

app.get('*', (req, res) => {
    res.send('page not found')
})

 


app.listen(port, () => {
    console.log(` port ${port}`)
})



