const express = require("express");

const app = express();

let notes = [];

app.use(express.json());

/*notes => post method => title and description*/

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({ message: "Note created successfully", notes: notes });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
