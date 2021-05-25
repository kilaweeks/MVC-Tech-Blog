const path = require('path'); 
const express = require('express'); 
const session = require('express-session'); 
const exphbs = require('express-handlebars'); 
const routes = require('./controllers'); 
const helpers = require('./utils/helpers'); 

const sequelize = require('../config/connections'); 

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.statis(path.join(__dirname, 'public'))); 

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`Now listening on port ${port}`));
});