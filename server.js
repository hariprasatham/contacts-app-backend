const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes")); // it is known as middleware
app.use("/api/users", require("./routes/userRoutes")); // it is known as middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is listening son ${port}`);
});
