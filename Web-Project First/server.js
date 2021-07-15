const express  = require('express');
const app = express();

app.listen(8080 , function(){
   console.log('listening on 8080');
}); //8080 port 로 연다.

// 누군가가 /pet 으로 방문을 하면.. pet 관련된 안내문을 띄워주자

app.get('/pet',function(request , response){
   response.send('shop site.');
});

app.get('/beauty',function(request , response){
    response.send('beauty site.');
 });

 
app.get('/',function(request , response){
    response.sendFile(__dirname + '/hello world.html');
 });

 app.get('/test',function(request , response){
    response.sendFile(__dirname + '/index.html');
 });