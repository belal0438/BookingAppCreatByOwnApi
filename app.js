const path = require('path');
const express = require('express')

const IndexRoutes = require('./routes/index')

const sequelize = require('./util/database');
// const sequelize = require('./models/User');

const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(IndexRoutes);

sequelize
.sync()
.then(result =>{
    // console.log(result)
    app.listen(8000);
})
.catch(err => console.log(err));

