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


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})