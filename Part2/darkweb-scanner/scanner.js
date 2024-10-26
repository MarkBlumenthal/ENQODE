// Import required libraries
const axios = require('axios');
const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

// LeakCheck API configuration
const LEAKCHECK_API_URL = 'https://leakcheck.io/api/public';

/**
 * Queries the LeakCheck API for potential dark web breaches
 * related to a specified identifier (email or domain) using cURL.
 * @param {string} identifier - Email or domain to check for breaches.
 * @returns {Promise<object>} - Breach data in JSON format.
 */
function checkBreachCurl(identifier) {
    return new Promise((resolve, reject) => {
        const curlCommand = `curl "${LEAKCHECK_API_URL}?check=${identifier}"`;
        exec(curlCommand, (error, stdout, stderr) => {
            if (error) {
                return reject({ success: false, error: stderr });
            }
            try {
                const data = JSON.parse(stdout);
                resolve(data);
            } catch (parseError) {
                reject({ success: false, error: "Failed to parse JSON response." });
            }
        });
    });
}

/**
 * Example of using a command-line tool (e.g., nslookup) to get domain info.
 * @param {string} domain - The domain to check.
 * @returns {Promise<string>} - nslookup command result.
 */
function nslookupDomain(domain) {
    return new Promise((resolve, reject) => {
        exec(`nslookup ${domain}`, (error, stdout, stderr) => {
            if (error) {
                return reject(`Error: ${stderr}`);
            }
            resolve(stdout);
        });
    });
}

// Endpoint to check dark web data for a specific identifier using cURL
app.get('/checkBreach', async (req, res) => {
    const { identifier } = req.query;
    if (!identifier) {
        return res.status(400).json({ success: false, error: "Identifier query parameter is required." });
    }

    try {
        const breachData = await checkBreachCurl(identifier);
        res.json(breachData);
    } catch (error) {
        res.status(500).json(error);
    }
});

//  endpoint for nslookup
app.get('/nslookup', async (req, res) => {
    const { domain } = req.query;
    if (!domain) {
        return res.status(400).json({ success: false, error: "Domain query parameter is required." });
    }

    try {
        const result = await nslookupDomain(domain);
        res.send(`<pre>${result}</pre>`);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
