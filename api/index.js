// config inicial 
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')
//forma de ler JSON /middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da API
app.post('/person', async (req, res) => {

    // req.body

    // name: "Matheus", salary: 5000, approved: false
    const {name, salary, approved} = req.body

    const person = {
        name, 
        salary,  
        approved
    }

    //create

    try {

      // criando dados  
      await Person.create(person)  

      res.status(201).json({message: 'Pessoa inserida no sistema com sucesso!'})

    } catch (error) {
      res.status(500).json({error: error})
    }

}) 

//rota inicial / endpoint
app.get('/', (req, res) => {

    //mostrar req
    res.json({message: 'oi, Express!'}) 

})

// Esqueci161224.
//mongodb+srv://Hernandez:<password>@apicluster0.8a0dp.mongodb.net/bancodaapi?retryWrites=true&w=majority

mongoose
.connect('mongodb+srv://Hernandez:Esqueci161224.@apicluster0.8a0dp.mongodb.net/bancodaapi?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectamos ao MongoDB')
    app.listen(3000)
})
.catch((err) => console.log(err)) 

//entregar um porta
