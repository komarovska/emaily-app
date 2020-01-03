const express = require('express');
const app = express();


app.get('/order', (req, res) => {
    res.send({'ok': 'google'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
