const express = require('express');

const app = express();

const students = [
   {firstName: 'jo',
   lastName: 'do',
   userName: 'yo',
   schoolName: 'sj',
   license: 'licensed',},
   {firstName: 'jo',
   lastName: 'do',
   userName: 'yo',
   schoolName: 'sj',
   license: 'licensed',},
]

app.get('/api/students', (req, res) => {
  res.send({data:students});
});

app.put('/api/students/:id', (req, res) => {
  res.send({data:req.params.id});
});

app.delete('/api/students', (req, res) => {
  res.send({data:"delete data"});
});



app.listen(3000, () => console.log('Example app is listening on port 3000.'));
