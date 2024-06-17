import express from 'express';
import { CreateFile, ReadFolder } from './file-utils.js';

const port = 5000;
const hostname = "localhost";

let app = express();

app.get('/create-file', (req, res) => {
  CreateFile();
  res.send({msg:"File Created Successfully"})
  
})
app.get('/read-file', (req, res) => {
  let files = ReadFolder("files")
  res.send(files)
})


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});