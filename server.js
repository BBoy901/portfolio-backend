const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const profile = {
  name: "Fadhila",
  role: "Data Science Student",
  skills: [
    "Python",
    "React",
    "SQL",
    "Cloud Hosting"
  ],
  projects: [
    "Skin Disease Detection System",
    "Portfolio Website",
    "Data Dashboard"
  ]
};

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Backend API Running"
  });
});

app.get("/profile", (req, res) => {
  res.json(profile);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});