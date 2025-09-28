const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
const playerRoutes = require("./routes/players.js");
app.use("/api/players", playerRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// MongoDB connection string (update with your credentials/DB name)
const mongoURI = "mongodb+srv://Harsha_db_user:KDIQ869GOnGYWyvY@cluster0.7nhkvq8.mongodb.net/Harsha_db_user?retryWrites=true&w=majority";



// Connect to MongoDB and start the server
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.error("Failed to connect", err));

