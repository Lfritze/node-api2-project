const server = require("./express/server.js");

server.listen(8000, () => {
  console.log(`\n **** Server is Running on http://localhost:8000 **** \n`);
});
