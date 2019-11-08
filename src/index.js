// import express from "express";
// import { join } from "path";
// import { notFound, catchErrors } from "./middlewares/errors";
// import bodyParser from "body-parser";
// import register from "babel-core/register";
// import babelPolyfill from "babel-polyfill";

// import mongoose from "mongoose";

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

// mongoose.Promise = global.Promise;
// // mongoose.connection.on("error", err => {
// //   console.log("Could not connect to the database. Exiting now...");
// //   process.exit();
// // });

// const app = express();
// const port = process.env.PORT || 5000;

// app.set("view engine", "pug");
// app.set("views", join(__dirname, "views"));
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // routes config
// // ...

// // errors handling
// app.use(notFound);
// app.use(catchErrors);

// // let's play!
// app.listen(port, () => {
//   console.log(`Server is up!`);
// });
