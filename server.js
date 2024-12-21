const http = require('http');
const host = '127.0.0.1';
const port = 3300;
const server = http.createServer(function(request,response){
	response.statusCode = 200;
	response.end(`<body style='text-align:center;background:black;'>
<h1 style='color:cyan;'> HELLO SOBAT </h1>
</body>`);
  console.log('server berhasil dibuka');
});
server.listen(port,host,'',function(){
	console.log(`server aktif di localhost://${host}:${port}`)
})