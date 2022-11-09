require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const {
  newUserController,
  getUserController,
  getUserPostsController,
  getMeController,
  loginController,
} = require('./controllers/users');

const {
  getPostsController,
  newPostController,
  getSinglePostController,
  deletePostController,
} = require('./controllers/posts');

const { authUser } = require('./middlewares/auth');

const app = express();

app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/uploads', express.static('./uploads'));

//Rutas de usuario
app.post('/user', newUserController);
app.get('/user/:id', getUserController);
app.get('/user/:id/posts', getUserPostsController);
app.get('/user', authUser, getMeController);
app.post('/login', loginController);

//Rutas de posts
app.post('/', authUser, newPostController);
app.get('/', getPostsController);
app.get('/post/:id', getSinglePostController);
app.delete('/post/:id', authUser, deletePostController);

// Middleware de 404
app.use((req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Not found',
  });
});

// Middleware de gestión de errores
app.use((error, req, res, next) => {
  console.error(error);

  res.status(error.httpStatus || 500).send({
    status: 'error',
    message: error.message,
  });
});

const { PORT } = process.env;

// Lanzamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT} 👻`);
});
