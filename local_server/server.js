const token = ''; // add the token here



const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/', async (req, res) => {
  try {
    const data = req.body; // Get data from the request body

    const response = await fetch('https://visitor-qa.sendpro360.pitneycloud.com/api/v1/vms/enrollments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(data);
    console.log(response);
    res.send(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
