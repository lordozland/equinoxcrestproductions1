const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const moment = require('moment');
const helmet = require('helmet');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3333;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });