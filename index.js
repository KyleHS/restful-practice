
//-------------CRUD---------------

//GET /comments - list all comments
//POST /comments - create a new comment
//GET /comments/:id -get one comment (using ID)
//PATCH /comments/:id - update one comment
//DELETE /comments/:id -destroy one comment

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("on port 3000")
})