const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const students = [
   {id:'1',
   firstName: 'jo',
   lastName: 'do',
   userName: 'yo',
   schoolName: 'sj',
   license: 'licensed',},
   {id:'2',
   firstName: 'jo',
   lastName: 'do',
   userName: 'yo',
   schoolName: 'sj',
   license: 'licensed',},
]

app.get('/api/students', (req, res) => {
  res.send(students);
});

app.put('/api/students/:id', (req, res) => {
  res.send({data:req.params.id});
});

app.post('/api/students', (req, res) => {
  res.send({data:"delete data"});
});



app.listen(3000, () => console.log('Example app is listening on port 3000.'));
