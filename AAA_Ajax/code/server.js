const express = require('express')

const app = express()

app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send('HELLO AJAX GET')
})
app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send('HELLO AJAX POST')
})
app.all('/JSON-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        name: 'zhaohang'
    }
    let str = JSON.stringify(data)
    response.send(str)
})
//IE
app.get('/ie', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send('HELLO AJAX GET IE')
})
//delay
app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        response.send('HELLO AJAX DELAY')
    }, 3000)
})
//jQuery
app.get('/jquery', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('JQuery')
})
app.all('/jquery', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const data = { name: zhaohang }
    response.send(JSON.stringify(data))
})
app.listen(8000, () => {
    console.log('chenggong 8000')
})