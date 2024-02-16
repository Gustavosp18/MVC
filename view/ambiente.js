const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    if (path === '/' || path === '/index.html') {
        fs.readFile(__dirname + '/index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else if (path === '/resultado.html') {
        const query = url.parse(req.url, true).query;
        const resultado = query.resultado;
        fs.readFile(__dirname + '/resultado.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            const resultadoHtml = data.toString().replace('{{resultado}}', resultado);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(resultadoHtml);
        });
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
