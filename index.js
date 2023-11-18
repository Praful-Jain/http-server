const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

// GET /html 
app.get('/html', (req, res) => {
    res.sendFile('/home/praful/JavaScript/HTTP-server/index.html');
});  

// GET /json 
app.get('/json',(req,res) => {
    res.sendFile('/home/praful/JavaScript/HTTP-server/index.json');
})

// GET /uuid
app.get('/uuid', (req, res) => {
    // Generate a new UUID (v4) and send it as a response
    const uuid = uuidv4();
    res.send(`UUID generated: ${uuid}`);
});

// GET /status/:status_code
app.get('/status/:status_code', (req, res) => {
    const status_code= parseInt(req.params.status_code, 10);
  
    if (isNaN(status_code)) {
      res.status(400).send('Invalid status code.');
    } 
    else {
      res.status(status_code).send(`Status code: ${status_code}`);
    }
});
  
// GET /delay/:delay_in_seconds 
app.get('/delay/:delay_in_seconds', (req, res) => {
    const delay = parseInt(req.params.delay_in_seconds, 10);
  
    if (isNaN(delay)) {
      res.status(400).send('Invalid delay value.');
    } 
    else {
      setTimeout(() => {
        res.send(`Delayed response after ${delay} seconds.`);
      }, delay * 1000); 
    }
});


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

