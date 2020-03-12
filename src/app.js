const express = require('express');
const app = express();
const cors = require('cors');

const morgan = require('morgan');
const bodyParser = require('body-parser');

// settings
app.set('port', process.env.PORT || 3000);

// middlewates
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// routes
require('./routes/userRoutes')(app);

//statick files

app.listen(app.get('port'), () => {
    console.log('server on port 3000');
})