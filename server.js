const express = require("express");
const axios = require("axios");
const marked = require("marked");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static("public"));

// Route to render the Markdown file
app.get("/", async (req, res) => {
  try {
    const repoOwner = "rkooyenga";
    const repoName = "resume";
    const filePath = "resume.md";
    const branch = "test"; // or "master"

    // Fetch the raw content of the Markdown file from GitHub
    const githubUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${filePath}`;
    const response = await axios.get(githubUrl);

    // Convert Markdown to HTML
    const htmlContent = marked(response.data);

    // Send the HTML content as the response
    res.send(`
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ray Kooyenga, Resume">
    <title>Ray Kooyenga | Resume</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/terminal.css@0.5.1">
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta http-equiv="content-language" content="en" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="utf-8">
  <title>Ray Kooyenga website</title>
  <meta name="description" content="Ray Kooyenga website">
  <meta name="author" content="">
  <meta name="copyright" content="" >
  <meta name="referrer" content="origin">
  <meta http-equiv="cleartype" content="on">
  <meta name="Access-Control-Allow-Origin" content="*">
  <meta http-equiv="Access-Control-Allow-Origin" content="*">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Cache-Control" content="no-cache, max-age=0, must-revalidate, no-store">
  <meta name="language" content="English, en">
  <meta name="iarchiver" content="archive">
  <meta name="robots" content="index,follow">
  <meta name="googlebot" content="archive">
  <meta name="google-site-verification" content="Pwl_FMxwPH83pk6ZqTvRdrH7PrknX4zAeWKU7wtozXQ">
  <meta name="google-analytics" content="">
  <meta name="GOOGLEBOT" content="cache">
  <meta name="Slurp" content="cache">
  <link rel="shortcut icon" href="">
  <meta name="author" content="" />
  <meta name="application-name" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="format-detection" content="telephone=no">
  <meta itemprop="name" content="">
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <link rel="canonical" href="https://raykooyenga.com" />
  <link rel="publisher" href="https://raykooyenga.com" />
  <meta property="og:title" content="Ray Kooyenga">
  <meta property="og:description" content="Ray Kooyenga personal website and blog">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://raykooyenga.com">
  <meta property="og:image" content="">
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="raykooyenga.com" />
  <meta property="article:publisher" content="" />
  <meta property="article:author" content="" />
  <meta property="article:tag" content="gpl" />
  <meta property="article:tag" content="share-alike" />
  <meta property="article:section" content="" />
  <meta property="article:published_time" content="2024-10-22T19:35:53.000-07:00" />
  <meta property="article:modified_time" content="2024-10-22T19:34:23.000-07:00" />
  <meta property="og:updated_time" content="2024-10-22T19:34:23.000-07:00" />
  <meta property="fb:app_id" content="" />
  <meta property="og:image" content="" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content="" />
  <meta name="twitter:title" content="" />
  <meta name="twitter:site" content="" />
  <meta name="twitter:image" content=""/>
  <meta name="twitter:creator" content="@rayktweets" />
  <meta name="google-site-verification" content="Pwl_FMxwPH83pk6ZqTvRdrH7PrknX4zAeWKU7wtozXQ" />
  <meta name="msvalidate.01" content="">
  <meta name="alexaVerifyID" content="">
  <meta name="yandex-verification" content="">
  <meta name="google-plus" content="">
  <meta name="contributes-to" content="">
  <meta name="contributes-to" content="https://github.com/rkooyenga">
  <link rel="author" content="ray@raykooyenga.com" href="https://raykooyenga.com">

    <style>
        body {
            background-color: #f9f8f6; /* Off-white background */
            color: #333333; /* Ink-like text color */
            font-family: monospace;
        }

        h1, h2, h3 {
            font-family: 'Courier New', monospace;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
        }

        .section {
            margin-bottom: 30px;
        }

        .section h2 {
            margin-bottom: 15px;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        .contact-info {
            margin-top: 20px;
        }
    </style>
</head>
<body class="terminal">
    <div class="container">
        ${htmlContent}
    </div>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9P4KP1YMH6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9P4KP1YMH6');
</script>
</body>
</html>
    `);
  } catch (error) {
    res.status(500).send("Error fetching the Markdown file.");
  }
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
