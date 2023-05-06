const express = require('express')
const axios = require('axios')
const newsRouter = express.Router()
// const moment = require('moment')


newsRouter.get('/',async(req,res)=>{
    try {
        const newsAPI = await axios.get('http://newsapi.org/v2/top-headlines?country=in&apiKey=e9f58ab5aa274a07859280f7b1bb44ae')
        res.render('news', { articles: newsAPI.data.articles })
    } catch (error) {
        if(error.response) {
            console.log(error)
        }

    }
})

newsRouter.post('/search', async(req, res) => {
    const search = req.body.search
    try {
        const newsAPI =await axios.get(`http://newsapi.org/v2/everything?q=${search}&apiKey=36f3e29b704f41339af8439dc1228334`)
        res.render('newsSearch',{articles:newsAPI.data.articles})
    } catch(err) {
        if(err.response) {
            console.log(err)
        }
    }
})

newsRouter.get('/news/:category', async(req, res) => {
    var category = req.params.category;
    try {
        var url = 'http://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey=e9f58ab5aa274a07859280f7b1bb44ae';
        const newsAPI = await axios.get(url)
        res.render('newsCategory', { articles: newsAPI.data.articles })
    } catch(err) {
        if(err.response) {
            console.log(err)
        }
    }
})

module.exports = newsRouter