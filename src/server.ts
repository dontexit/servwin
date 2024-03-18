import http from 'http';

const hostname = "localhost";
const port = 3636;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	console.log(req);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end("Hello from the toy language Node server");
});

server.listen(hostname, port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
