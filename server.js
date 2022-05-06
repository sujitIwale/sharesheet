const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const liveSite = "https://file-visualizer.netlify.app/";
// fs.rmdirSync('./uploads/img', { recursive: true });

// middlewares
app.use(cors());
app.use(express.json({ extended: false }));

// database connection
const connectDB = require("./db/db");

connectDB();

app.get("/", (req, res) => {
  // const data = fs.readFileSync('rawdata/data.json', 'utf-8');
  res.send(`Welcome to file-upload api try to visit ${liveSite}`);
});

// Routes
app.use("/auth/", require("./routes/auth"));
app.use("/upload/img", require("./routes/imageUpload"));
app.use("/upload/csv", require("./routes/csvUpload"));
app.use("/sheet", require("./routes/api/sheet"));

app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`);
});
