/*
const require = new XMLHttpRequest();
require.open('GET',);
require.onreadystatechange = function(){
  if(this.readyState == 4){
    const data = JSON.parse(this.response);
    for(let i = 0; i < data.length; i++){
      const div = document.createElement('div');
      div.setAttribute('class','img');
      const img = document.createElement('img');
      img.src = data[i];
      div.appendChild(img);
      document.body.appendChild(div);
    }
  }
}
require.send();
*/

const http = require('http');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    upload.single('image')(req, res, (err) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Error uploading file');
      } else {
        console.log(req.file);
        res.statusCode = 200;
        res.end('File uploaded successfully');
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
