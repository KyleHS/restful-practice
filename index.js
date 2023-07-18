
//-------------CRUD---------------

//GET /comments - list all comments
//POST /comments - create a new comment
//GET /comments/:id -get one comment (using ID)
//PATCH /comments/:id - update one comment
//DELETE /comments/:id -destroy one comment

const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
{
    username: 'Kevvy',
    comment: 'stake stake stake!'
},
{
    username: 'Knoely',
    comment: 'aururururururuaaaaaaaaaaa'
},
{
    username: 'Rinny',
    comment: 'on a scale of 1-10 how was your day'
},
{
    username: 'Mary',
    comment: 'oh mylanta'
},
{
    username: 'Evan',
    comment: 'Sigh... animal'
}
]
app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here are your ${qty} ${meat} tacos`)
})

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.redirect("/comments");  //sends the user back to /comments after submitting comment
})

app.listen(3000, () => {
    console.log("on port 3000")
})