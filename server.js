
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./Models/productModel')
const { json } = require('body-parser')
const EmployeDetails = require('./Models/employeDetails')
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})
app.get('/blog', (req, res) => {
    res.send('Am trying to write new blog Please encourage me  Thanks')
})

app.get('/product', async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.mesage })
    }
})
app.post('/employeDetails', async (req, res) => {
    try {
        const employeDetails = await EmployeDetails.create(req.body)
        res.status(200).json(employeDetails)
    } catch (er) {
        console.log(er.message)
        res.status(500).json({ message: er.mesage })
    }
})
app.post('/product', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.mesage)
        res.status(500).json({ message: error.message })

    }
})
app.listen(2000, () => {
    console.log("Node Api is Running in my machine");
})
mongoose.connect('mongodb+srv://Admin:hRLdVqvdmkszJsmb@cluster0.fdnuoqn.mongodb.net/').then(() => {
    console.log("Successfully connected to DB")
}).catch((error) => {
    console.log(error)
})