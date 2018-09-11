const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');



const app = express();
//body parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});