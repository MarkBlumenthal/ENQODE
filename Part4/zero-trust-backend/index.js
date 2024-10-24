const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// File path to store the Zero-Trust data
const dataFilePath = path.join(__dirname, 'zeroTrustData.json');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Helper function to read data from the file
const readDataFromFile = () => {
    if (fs.existsSync(dataFilePath)) {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
};

// Helper function to write data to the file
const writeDataToFile = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// Endpoint to submit Zero-Trust Score data
app.post('/submit', (req, res) => {
    const data = req.body;
    
    // Validate incoming data (for example, checking required fields)
    if (!data || !data.averageShannonShannonEntropyScore) {
        return res.status(400).json({ error: 'Invalid data' });
    }
    
    // Read existing data from the file
    const zeroTrustData = readDataFromFile();

    // Add new data
    zeroTrustData.push(data);

    // Write updated data back to the file
    writeDataToFile(zeroTrustData);

    return res.status(201).json({ message: 'Data submitted successfully' });
});

// Endpoint to retrieve stored data
app.get('/data', (req, res) => {
    // Read data from the file
    const zeroTrustData = readDataFromFile();
    return res.status(200).json(zeroTrustData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

