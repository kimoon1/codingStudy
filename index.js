const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000;

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/sound/:name', function (req, res) {
    const { name } = req.params;
    let sound;

    switch(name) {
        case 'dog': 
            sound = '멍멍'
            break;
        case 'cat':
            sound='야용';
            break;
        default: 
            sound = '알수없음';
            break;
    }
    res.json({'sound': sound})
    // console.log(q);
    // const query = req.query;
    // console.log(query);
    
    res.json({'toto': query})
})
app.get('/cat', function (req, res) {
    res.json({ 'sound' : '야옹, 야옹'})
})
app.listen(port, () => {
    console.log(`listening is port ${port} `);
})