const server = require('./api/server.js');
port = 4007;


server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
