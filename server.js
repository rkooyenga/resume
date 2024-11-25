const express = require("express");
const axios = require("axios");
const fs = require('node:fs');
const bodyParser = require('body-parser'); //For parsing webhook POST requests


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.json()); //Body parser for JSON webhook payloads

app.get("/", async (req, res) => {
  // ... (Existing code to serve the cached resume.html remains the same) ...
});

// Webhook handler route
app.post("/github-webhook", async (req, res) => {
  try {
    const repoOwner = "rkooyenga";
    const repoName = "resume";
    const filePath = "resume.html";
    const branch = "test"; //Use 'main' branch unless you are working with a different branch

    const githubUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${filePath}`;
    const response = await axios.get(githubUrl);

    // Update the cached file with the new content
    fs.writeFileSync('./public/resume.html', `<!DOCTYPE html><html><head><link rel="stylesheet" href="/styles.css"></head><body>${response.data}</body></html>`);

    console.log("Resume updated successfully!");
    res.status(200).send("Resume updated."); // Indicate successful update

  } catch (error) {
    console.error("Error updating resume from webhook:", error);
    res.status(500).send("Error updating resume.");
  }
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
