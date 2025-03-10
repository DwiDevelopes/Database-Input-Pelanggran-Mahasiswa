
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('index.html'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/css/style.css', (req, res) => {
    res.sendFile(__dirname + '/css/style.css');
});

app.get('/js/script.js', (req, res) => {
    res.sendFile(__dirname + '/js/script.js');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
