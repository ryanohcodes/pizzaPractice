const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 8000;

app.use(cors())

const pizza = {
    'dominos':{
        'worth': true,
        'flavor': true
    },
    'papaJohn':{
        'worth': false,
        'flavor': false
    },
    'unknown':{
        'worth': 'unknown',
        'flavor': 'unknown'
    }
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/:name', (request,response)=>{
    const pizzaName = request.params.name.toLowerCase();
    if(pizza[pizzaName]){
        response.json(pizza[pizzaName])
    }else{
        response.json(pizza['unknown'])
    }
    
});

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on PORT ${PORT}. You better go catch it`)
});