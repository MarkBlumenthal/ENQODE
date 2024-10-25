// scanner.js
const axios = require('axios');
const express = require('express');

const app = express();
const PORT = 3000;

/**
 * Queries the LeakCheck Public API for potential dark web breaches
 * related to a specified email or username.
 * @param {string} identifier - Email or username to check for breaches.
 * @returns {Promise<object>} - Breach data in JSON format.
 */
async function checkBreach(identifier) {
    const url = 'https://leakcheck.io/api/public';
    try {
        const response = await axios.get(url, {
            params: { check: identifier }
        });
        return response.data;
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Set up the endpoint for Postman
app.get('/checkBreach', async (req, res) => {
    const { identifier } = req.query;
    if (!identifier) {
        return res.status(400).json({ success: false, error: "Identifier query parameter is required." });
    }

    const breachData = await checkBreach(identifier);
    res.json(breachData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

