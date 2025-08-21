const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.post('/send-form', (req, res) => {
  const { imie, email, subject, topic, message } = req.body;

  console.log('Dane z formularza:', req.body);



  res.status(200).json({ message: 'Formularz odebrany poprawnie!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));
