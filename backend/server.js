import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import products from './products'

const port = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/product' , (req, res) => {
    
    res.json(products)
})
app.get('/api/product/:id' , (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(port, ( ) => console.log("Server is running"))