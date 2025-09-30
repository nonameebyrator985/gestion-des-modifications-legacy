const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue dans l\'outil de gestion des modifications héritées!');
});

const server = app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});

module.exports = server;