const express = require('express');
var cors = require('cors')
const app = express();
var router = express.Router();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.set('view engine', 'pug');

const classesRouter = require('./routes/class');
const typesRouter = require('./routes/type');
const cardsRouter = require('./routes/card');
const skillsRouter = require('./routes/skill');
const uploadRouter = require('./routes/upload');

app.use('/classes', classesRouter);
app.use('/types', typesRouter);
app.use('/cards', cardsRouter);
app.use('/skills', skillsRouter);
app.use('/upload', uploadRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Serveur démarré sur http://localhost:' + port);
})