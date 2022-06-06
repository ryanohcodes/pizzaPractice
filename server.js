const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 8000;

app.use(cors())

const tea = {
    'oolong':{
        'type':'black',
        'origin':'yo mammas house',
        'waterTemp': 200,
        'steepTime': 180,
        'caffined': true,
        'flavor': 'delicious'
    },
    'matcha':{
        'type':'green',
        'origin':'yo mammas house',
        'waterTemp': 200,
        'steepTime': 180,
        'caffined': false,
        'flavor': 'delicious'
    },
    'unknown':{
        'type':'unknown',
        'origin':'unknown',
        'waterTemp': 'unknown',
        'steepTime': 'unknown',
        'caffined': 'unknown',
        'flavor': 'unknown'
    }
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/:name', (request,response)=>{
    const teaName = request.params.name.toLowerCase();
    if(tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
    
});

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on PORT ${PORT}. You better go catch it`)
});