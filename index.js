const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>The Skill Udaan</title></head>
      <body style="font-family:sans-serif; text-align:center; padding-top:60px; background:#f8fafc;">
        <h1 style="color:#2563eb; font-size:40px;">The Skill Udaan is LIVE! 🚀</h1>
        <p style="font-size:20px;">Your website is working successfully!</p>
        <p>Powered by Render + GitHub</p>
      </body>
    </html>
  `);
});

app.listen(port, () => console.log('Server running on ' + port));
