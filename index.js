// Creating Bassic Express Routes...

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8005;

app.get('/',(req,res)=>{
  return res.json({
     response : "Server Created Successfully !",
  });
});

app.listen(port,()=>{
   console.log('Server Running On Port '+port);
});
