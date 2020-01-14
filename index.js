const server = require("./express/server.js");

server.listen(6000, () => {
  console.log(`\n **** Server is Running on http://localhost:6000 **** \n`);
});
