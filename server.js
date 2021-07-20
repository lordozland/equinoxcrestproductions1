const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3333;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: '3306',
//   user: 'root',
//   password: 'password',
//   database: 'creation'
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

// Current version yeilds   XX(EHOSTUNREACH, "host is unreachable")