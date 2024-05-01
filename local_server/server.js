const token = 'eyJraWQiOiJTbVM5d0pOSVVwQ0dKM3I5OG11bzRTbHQ3bDlQenFaenJydUpDT0ktck1VIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULllZTXN3Z2o5RWlIa1FVZXE3ZnZqTHZpdUFSc0hmMDVVeTMxMzRkMVNJdE0iLCJpc3MiOiJodHRwczovL3BpdG5leWJvd2VzLm9rdGFwcmV2aWV3LmNvbS9vYXV0aDIvYXVzdGxiN21jNDBGZ2o2aWswaDciLCJhdWQiOiJodHRwczovL2FwaS5waXRuZXlib3dlcy5jb20vc3AzNjBzZXJ2aWNlcyIsInN1YiI6InNoaWxweXFhdXNlckB5b3BtYWlsLmNvbSIsImlhdCI6MTcxNDEyNzYxOCwiZXhwIjoxNzE0MTMxMjE4LCJjaWQiOiIwb2F0bDg2bmpwVDduSkxFWDBoNyIsInVpZCI6IjAwdTFsNHA0azVxVW1oSE5IMGg4Iiwic2NwIjpbImVtYWlsIiwic3BhIiwib3BlbmlkIiwiYWRtIl0sImF1dGhfdGltZSI6MTcxNDEyNzYxOCwiZ3JwIjpbImlkcC1zcGEtdXNlcnMtcWEiXSwic3ZjVmVyIjoiMy4wIiwiY2xhaW1fYWRtIjp7Imx2bEF0IjoiRSJ9LCJjbGFpbV9zcGEiOnsiZW50SUQiOiJ3eXIzVk5iV01seiIsImxvY0lEIjoicHhwZTNZYTVFR2siLCJzdWJJRCI6InNhOGQ2OTkiLCJjdHlwIjoiQ29tbWVyY2lhbCIsImNudHJ5IjoiR0IiLCJyb2xlcyI6WyJVU0VSIl0sInBsYW5zIjpbIlBJVE5FWVNISVBfUFJPIiwiU0FNX1BSRU1JVU1fUExBTiJdLCJzdGF0dXMiOiJBQ1RJVkUiLCJkaXZJRCI6IjdWMDZtT01qNTh3IiwibG9jbCI6ImVuX1VLIiwibG9jQ250cnkiOiJHQiJ9fQ.QZos8fzJ-5bmOK72vP_mUoI-tSI0-If0QT9cNT35cEN5e2o2bDfrvv2T5lUnsM-E8-AbqQO7TNV29vpFqlLzHtU1h-qsHx4zJcvPtbY6V932WYQr8k-l_UsyK5Yy33_BJnc2T5-xHx8EdV6dNkJm0W8s-4JhrLASP0hHTSD3LE8qC_NycW8FOEhzElg4ghHxuqntRXXXouYKNwqK-5RUMpSW1lxrnqvrCRcsfKOBEiwrVSI9xzYgH6RA5nz8jjHggeSrc8yKCkJp3TCXG2YVdW4RuqKA94LihgQHrz9W6XSoOobX-3zLdDKSR26PdxqTrcEPjq6plJ1C2SXIzIBQ6Q';



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
                'Authorization': `Bearer ${token}` // Replace with your actual token
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