let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./route')(app)

app.get('/status', function(req, res) {
    res.send('Hello nodejs server belong to nattapon')
})

app.get('/hello/:name', function(req, res) {
    console.log('hello - ' + req.params.name)
    res.send('sey hello with ' + req.params.name)

})

app.get('/app1', function(req, res) {
    let X = JSON.stringify(req.body.X)
    res.send('ผลลัพธ์ที่ได้ของ ' + X + ' x ' + X + ' = ' + (X * X))
})

app.get('/app2', function(req, res) {
    let X = JSON.stringify(req.body.X)

    function isPrime(X) {
        if (X <= 1) {
            return false;
        }
        for (let i = 2; i * i <= X; i++) {
            if (X % i === 0) {
                return false;
            }
        }
        return true;
    }

    res.send('ผลลัพธ์ที่ได้ของ isPrime(' + X + ') = ' + isPrime(X))
})

let port = 8081
app.listen(port, function() {
    console.log('server running on ' + port)
})