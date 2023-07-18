
//-------------CRUD---------------

//GET /comments - list all comments
//POST /comments - create a new comment
//GET /comments/:id -get one comment (using ID)
//PATCH /comments/:id - update one comment
//DELETE /comments/:id -destroy one comment

const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid }= require('uuid');  //package that allows us to use unique ids for each comment in array

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
{
    id: uuid(),
    username: 'Kevvy',
    comment: 'stake stake stake!'
},
{
    id: uuid(),
    username: 'Knoely',
    comment: 'aururururururuaaaaaaaaaaa'
},
{
    id: uuid(),
    username: 'Rinny',
    comment: 'on a scale of 1-10 how was your day'
},
{
    id: uuid(),
    username: 'Mary',
    comment: 'oh mylanta'
},
{
    id: uuid(),
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

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id ===id)
    res.render ('comments/show', { comment }) 
})

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect("/comments");  //sends the user back to /comments after submitting comment
})

app.listen(3000, () => {
    console.log("on port 3000")
})