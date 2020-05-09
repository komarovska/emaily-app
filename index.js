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

require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
