/*
const envReader = require('dotenv');
envReader.config();  // reads .env and merges it into process.env
*/
// faster way
require('dotenv').config();


const server = require('./api/server.js');
// port = 4007;
const port = process.env.PORT || 4007;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
