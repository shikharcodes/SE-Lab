const express = require('express')
const app=express()
const port = process.env.PORT||5000;
const moment = require('moment')
app.locals.moment = moment;

// template engine  
app.use(express.static('public'))
app.set('view engine','ejs')

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/news'))

app.set('views','./views')

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))