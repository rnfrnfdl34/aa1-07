// tcp client
var net = require('net');
var port = 3000;
var client = new net.Socket();

// Connection using socket
client.connect(port, "127.0.0.1");


client.on('data', (data)=>{
    console.log('data: ' + data);
    client.destroy();
});


client.on("close",()=>{
    console.log("Connection closed");
});
