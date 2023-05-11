const express = require('express');
const cors = require('cors')
const multer = require('multer');
const app = express();
const upload = multer();
const router = express.Router();
const bodyParser = require('body-parser')

app.use(upload.array()); 
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const classesRouter = require('./routes/class');
const typesRouter = require('./routes/type');
const cardsRouter = require('./routes/card');
const skillsRouter = require('./routes/skill');
const generateNameRouter = require('./routes/generateName');

app.use('/classes', classesRouter);
app.use('/types', typesRouter);
app.use('/cards', cardsRouter);
app.use('/skills', skillsRouter);
app.use('/generateName', generateNameRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Serveur démarré sur http://localhost:' + port);
})