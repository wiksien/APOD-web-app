const express = require("express");
const path = require('path');
const cors = require("cors");

const app = express();
const serverPort = 5000;
const clientPort = 3000;
const reactAppDir = "/client";

require("dotenv").config({ path: "./config.env" });

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

/*__dirname takes the path of this current directory and since we put
  all of our react code in the "client" folder, we add that to the
  __dirname. */
app.use(express.static(path.join(__dirname + reactAppDir, 'build')));

//Database connection
const dbo = require("./db/conn");

app.listen(serverPort, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${serverPort}`);
});

//Client side connection
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + reactAppDir, 'build', 'index.html'));
});

app.listen(clientPort);