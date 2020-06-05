const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
require('./models/Movie');
require('./services/createMovie');
var apiProxyRouter = require('./services/apiProxyRouter');

const app = express();

function combineStores(stores) {
    return Object.keys(stores).map((storeId) => {
        if (stores[storeId].toJson) {
            return [storeId, stores[storeId].toJson()];
        }

        return [storeId, stores[storeId]];
    }).reduce((acc, next) => {
        const [storeId, content] = next;

        return {
            ...acc,
            [storeId]: content,
        };
    }, {});
}

app.use(bodyParser());
app.use(cors());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);
app.use(passport.initialize());
app.use('/api', apiProxyRouter);
app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'client/build')));
// Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, 'client/build')));
// Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'))
// });

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

mongoose.connect(keys.mongoURI);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
