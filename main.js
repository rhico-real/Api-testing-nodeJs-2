const http = require('http');
const fs = require('fs');

var PORT = process.env.PORT;

const server = http.createServer((req, res) => {

    //set header content type
    res.setHeader('Content-Type', 'application/json');

    //send the json file
    fs.readFile('./application.json', (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            //res.write(data)
            res.end(data);
        }
    });
});

server.listen(PORT, 'localhost', () => {
    console.log('listening for requests on port' + PORT.toString());
});