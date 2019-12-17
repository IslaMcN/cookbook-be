const express = require('express');
const CORS = require('cors');
const admin = require('firebase-admin');
const server = express();
const helmet =require('helmet');
const app = admin.initializeApp();


app({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  });


server.use(CORS());
server.use(helmet());
server.use(express.json());
server.use('/auth', authRoutes);
server.use('/recipes', authenticate, recipeRoutes)




server.get('/', (req, res) => {
    res.send('Hi!')
})

module.exports = server;