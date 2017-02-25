const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname,'../public')));
app.set('port',process.env.PORT || 3000);
app.get('/',(req,res)=>{

});
app.listen(app.get('port'),()=>{
  console.log('Started at '+app.get('port'));
})
