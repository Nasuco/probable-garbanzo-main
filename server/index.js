const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 8000;
const {readFile} = require('fs').promises

const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public'); 
app.use(express.static(PUBLIC_DIRECTORY))

app.get('/', async (req, res) => {
//   res.sendFile('../public/index.html', { root: __dirname });
res.send(await readFile('./public/index.html', 'utf-8'))
})

app.get('/cari', async (req, res) => {
res.send(await readFile('./public/index.example.html', 'utf-8'))
})

app.get('\.css$', async (req, res) => {
    res.send(await readFile('./public/css', 'utf-8'))
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const fs = require('fs');
// const path = require('path');
// const PUBLIC_DIRECTORY = path.join(__dirname, '/../public');
// const CSS_DIRECTORY = path.join(__dirname, '/../public/css');
// const IMAGES_DIRECTORY = path.join(__dirname, '/../public/images');
// // const IMAGE_DIRECTORY = path.join(__dirname, '/../public/images');

// function getHTML(htmlFileName) {
//   const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
//   return fs.readFileSync(htmlFilePath, 'utf-8')
// }

// function getCSS(cssFileName) {
//   const cssFilePath = path.join(CSS_DIRECTORY, cssFileName);
//   return fs.readFileSync(cssFilePath, 'utf-8');
// }

// function onRequest(req, res) {
//   if (req.url === "/") {
//     res.writeHead(200);
//     res.end(getHTML("index.html"))
//   } else if (req.url === "/index.example") {
//     res.writeHead(200);
//     res.end(getHTML("index.example.html"))
//     // else if (reqPath === '/index.example.html'){
//       //     res.statusCode = 200;
//       //     res.setHeader('Content-Type', 'text/html');
//       //     res.end(getHTML('index.example.html'));
//   } else if (req.url.match("\.css$")) {
//     const cssPath = path.join(__dirname, '/../public', req.url);
//     const fileStream = fs.createReadStream(cssPath, "UTF-8");
//     res.writeHead(200, { "Content-Type": "text/css" });
//     fileStream.pipe(res);
//   } else if (req.url.match("\.png$", "\.svg$")) {
//     const imagesPath = path.join(__dirname, '/../public/images', req.url);
//     const fileStream = fs.createReadStream(imagesPath);
//     res.writeHead(200, { "Content-Type": "image/png", "Content-Type": "image/svg+xml" });
//     fileStream.pipe(res);
//   } else if (req.url.match("\.js$")) {
//     const scriptPath = path.join(__dirname, '/../public', req.url);
//     const fileStream = fs.createReadStream(scriptPath);
//     res.writeHead(200, { "Content-Type": "text/javascript" });
//     fileStream.pipe(res);
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end("404 | Not Page Found");
//   }
// }

// const server = http.createServer(onRequest);

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });