require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connection = require("./connection");
const router = require("./routes/expenses.route");
const app = express();

app.use(cors());
app.use(express.json());

app.use('/expenses', router)

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Successfully connected To Database");
        console.log("Server running at port :", process.env.PORT);
      } catch (err) {
        console.log(err);
      }
})