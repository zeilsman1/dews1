const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path=require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.use('/static',express.static(path.join(__dirname,'/static')))



io.on("connection", (socket) => {
  // ...
});

httpServer.listen(3000);