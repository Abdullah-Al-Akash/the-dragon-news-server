const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const news = require('./news/news.json');

app.get('/', (req, res) => {
    res.send("Dragon is Running!")
});

// Get Categories:
app.get('/categories', (req, res) => {
    res.send(categories);
})

// Get News Details:
app.get('/news', (req, res) => {
    res.send(news);
})

// Get Specific News:
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

// Get Category Type News and All News:
app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews);
    }
})

app.listen(port, () => {
    console.log(`Dragon is Running on Port: ${port}`);
});