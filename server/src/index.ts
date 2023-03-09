import express from "express";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import bodyParser from "body-parser";
const mongoose = require("mongoose");

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const PORT = 8080;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}/`);
});

const MONGO_URL =
  "mongodb+srv://reza_talebii:reza123456@cluster0.uqazw.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL, { useNewUrlParser: true });
mongoose.connection.on("error", (error: Error) => console.log(error));
