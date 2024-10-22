const axios = require('axios');
require('dotenv').config();

// Use the correct IntelX API URL
const INTELX_API_URL = 'https://2.intelx.io/intelligent/search'; // Use the provided URL
const API_KEY = process.env.INTELX_API_KEY; // Your API key

/**
 * Function to query IntelX API for dark web data based on a domain or company.
 * @param {string} query - The domain or company name to search for.
 * @param {number} maxResults - The maximum number of search results to return.
 */
async function scanDarkWeb(query, maxResults = 10) {
    try {
        const response = await axios.post(
            INTELX_API_URL,
            {
                term: query,       // Search term (company name or domain)
                maxresults: maxResults,  // Maximum number of results to return
                media: 0,          // Search across all media types
                terminate: [1],     // Eliminate duplicates
                wait: 1             // Time to wait for a complete result set
            },
            {
                headers: {
                    'x-key': API_KEY,          // API key from your IntelX account
                    'Content-Type': 'application/json'
                }
            }
        );

        // Log the response
        console.log('Status:', response.status);
        console.log('Data:', response.data);
    } catch (error) {
        if (error.response) {
            // The request was made, and the server responded with a status code
            console.error('Status:', error.response.status);
            console.error('Response Data:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Request:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error:', error.message);
        }
    }
}

// Example usage
scanDarkWeb('adobe.com');



