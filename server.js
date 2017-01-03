const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//Get api
const api = require('./server/api');


const app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//point static path
 app.use(express.static(path.join(__dirname, 'dist'))); //Because dist folder has all objects, it should be used.
//app.use(express.static(path.join(__dirname, '/src'))); //during dev, I will not use dist folder

//set api routes
app.use('/api', api);


//catch all other routes and redirect to the index file which is handled by Angular 
app.get('/*', (req,res) => {
     res.sendFile(path.join(__dirname, 'dist/index.html'));
    //res.sendFile(path.join(__dirname, 'src/index.html'));  //during dev, I will not use dist folder.
});


//Get port from environment and store in express
const port = process.env.PORT || '3000';
app.set('port', port);


//crate a http server

const server = http.createServer(app);

//listen on provided port, on all network inteface
server.listen(port, ()=> console.log('ngZonMony running on localhost:' + port));
