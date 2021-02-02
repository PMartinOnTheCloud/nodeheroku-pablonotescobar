const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  let pagina="<!DOCTYPE html><html><head></head><body><form method='post' action='/'><label for='input_name'>Introdueix un nom: </label><input type='text' id='input_name' name='input_name'><br><input type='Submit' value='Llest!'></form></body></html>";
  res.send(pagina);
});

app.post('/', (req, res) => {
  let nom = req.body.input_name;
  let pagina= `<!doctype html><html><head></head><body>Hello, ${nom} </body></html>`;
  res.send(pagina);
}); 

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Example app listening on port 3000!')
});
