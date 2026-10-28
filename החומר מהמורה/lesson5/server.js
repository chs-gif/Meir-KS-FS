import express from 'express'

const server = express()

server.use(express.json())

let students = [
    { id: 1, name: 'Sara', age: 20 },
    { id: 2, name: 'Rivka', age: 18 },
    { id: 3, name: 'Rachel', age: 20 },
    { id: 4, name: 'Leah', age: 21 }
    ]

server.get('/students', (req, res) => {
    res.json(students)
})

server.get('/students/:id', (req, res) => {
    // req.params = { id: ..., name: ..., address: ... }
    const id = +req.params.id
    // const name = req.params.name
    // const address = req.params.address
    const student = students.find(s => s.id === id)
    res.status(200)
    res.json(student)
})

server.delete('/students/:id', (req, res) => {
    console.log('req.params: ', req.params)
    const id = +req.params.id
    students = students.filter(s => s.id !== id)
    res.json(students)
})

server.post('/students', (req, res) => {
    console.log('req.body: ', req.body)
    const body = req.body
    students.push(body)
    res.json(students)
})

server.put('/students/:id', (req, res) => {
    const id = +req.params.id
    const body = req.body
    const index = students.findIndex(s => s.id === id)
    students[index] = body
    res.send('success')
})

server.put('/students/:id/:name', (req, res) => {
    const id = +req.params.id
    const index = students.findIndex(s => s.id === id)
    students[index].name = req.params.name
    res.send('success')
})

server.listen(7000, () => {
    console.log('Server running on http://localhost:7000 or http://192.168.12.17:7000');  
})