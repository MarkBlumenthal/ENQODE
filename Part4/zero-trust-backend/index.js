const express = require('express');
const bodyParser = require('body-parser');

// Import the data handler functions
const { readDataFromFile, writeDataToFile, isDuplicate } = require('./dataHandler');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint to submit Zero-Trust Score data
app.post('/submit', (req, res) => {
    const data = req.body;

    if (!data || !data.averageShannonShannonEntropyScore) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    // Check for duplicates
    if (isDuplicate(data)) {
        return res.status(409).json({ message: 'Duplicate data, not added.' });
    }

    // Read existing data, add the new entry, and save it
    const zeroTrustData = readDataFromFile();
    zeroTrustData.push(data);
    writeDataToFile(zeroTrustData);

    return res.status(201).json({ message: 'Data submitted successfully' });
});

// Endpoint to retrieve stored data
app.get('/data', (req, res) => {
    const zeroTrustData = readDataFromFile();
    return res.status(200).json(zeroTrustData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// *************************************************************************************************************



// const express = require('express');
// const bodyParser = require('body-parser');
// const { readDataFromFile, writeDataToFile, isDuplicate } = require('./dataHandler');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// const ERROR_MESSAGES = {
//     INVALID_DATA: 'Invalid data',
//     DUPLICATE_DATA: 'Duplicate data, not added.',
//     SUBMISSION_SUCCESS: 'Data submitted successfully'
// };

// // Endpoint to submit Zero-Trust Score data
// app.post('/submit', async (req, res) => {
//     const data = req.body;

//     if (!data || !data.averageShannonShannonEntropyScore) {
//         return res.status(400).json({ error: ERROR_MESSAGES.INVALID_DATA });
//     }

//     // Check for duplicates
//     const duplicate = await isDuplicate(data);
//     if (duplicate) {
//         return res.status(409).json({ message: ERROR_MESSAGES.DUPLICATE_DATA });
//     }

//     try {
//         // Read existing data, add the new entry, and save it
//         const zeroTrustData = await readDataFromFile();
//         zeroTrustData.push(data);
//         await writeDataToFile(zeroTrustData);
//         return res.status(201).json({ message: ERROR_MESSAGES.SUBMISSION_SUCCESS });
//     } catch (error) {
//         return res.status(500).json({ error: 'Failed to submit data' });
//     }
// });

// // Endpoint to retrieve stored data
// app.get('/data', async (req, res) => {
//     try {
//         const zeroTrustData = await readDataFromFile();
//         return res.status(200).json(zeroTrustData);
//     } catch (error) {
//         return res.status(500).json({ error: 'Failed to retrieve data' });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
