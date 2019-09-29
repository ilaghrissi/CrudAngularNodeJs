const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
/* body parser */
app.use(bodyParser.json());
/* enable cors */
app.use(cors());

const customerRouter = require("./routes/customer.route.js");
app.use('/',customerRouter);


const port = process.env.PORT || 3000;
app.use(express.static(__dirname +'/dist/crud-front-end'));

app.get('/*',(req,res)=> res.sendFile(path.join(__dirname)));
const server = http.createServer(app);

server.listen(port,() => console.log('Running...',port));