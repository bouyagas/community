'use strict';
require('dotenv').config({ silent: true });
const express = require ('express');
const logger = require ('morgan');
const path = require ('path');
const bodyParser = require ('body-parser');

const communityRoute = require('./routes/api/community.js');
const cultureRooute = require('./routes/api/culture.js');

const server = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

server.use(logger('dev'));

server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, 'dist')));


server.use('/api/communities', communityRoute);
server.use('/api/cultures', cultureRooute);

server.listen(PORT, () => console.log('server here! listening on', PORT));





