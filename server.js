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
    const id = +req.params.id
    const student = students.find(s => s.id === id)
    res.json(student)
})

server.delete('/students/:id', (req, res) => {
    const id = +req.params.id
    students = students.filter(s => s.id !== id)
    res.send('success')
})

server.post('/students', (req, res) => {
    const body = req.body
    students.push(body)
    res.send('success')
})

server.put('/students/:id', (req, res) => {
    const id = +req.params.id
    const body = req.body
    const index = students.findIndex(s => s.id === id)
    students[index] = body
    res.send('success')
})

server.listen(5000, () => {
    console.log('Server running on http://localhost:5000');  
})