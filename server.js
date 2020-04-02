const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json());


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


app.post('/users', (req, res) =>{
    const username = req.body.username
    const password = req.body.password

    const foUsername = 'mitulsrv'
    const foPassword = 'mitulsrv'

    if(username === foUsername && password === foPassword){
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    }else{
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }

})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})