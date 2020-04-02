const express = require('express')
const app = express()

const mockUserData = [
    {name: "Mitul"},
    {name: "Rajan"}
]


app.get('/users', (req, res) => {
    res.json({
        success:true,
        message: "successfully got users, Nice!",
        users: mockUserData
    })
})

app.get('/users/:id', (req, res)=>{
    console.log(req.params.id);
    res.json({
        success:true,
        message: "successfully got users, Nice!",
        users: req.params.id
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})