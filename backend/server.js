import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { validateInput } from "./validate.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.post("/search", (req, res) => {
  const term = req.body.term;
  const result = validateInput(term);

  if (result === "xss" || result === "sql") {
    return res.redirect("/"); // clear input and remain on home page for new input
  }

  res.send(`
    <h2>Search Results</h2>
    <p>You searched for: <strong>${term}</strong></p>
    <a href="/">Return Home</a>
  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
