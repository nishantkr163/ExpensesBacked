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
        setInterval(() => {
          fetch(`https://expensesbacked.onrender.com`)
            .then(res => res.text())
            .then(body => console.log(`Pinged self: ${body}`))
            .catch(err => console.error(`Error pinging self: ${err}`));
        }, 14 * 60 * 1000); // Ping every 14 minutes
      } catch (err) {
        console.log(err);
      }
})