// Load environment variables from .env file
require("dotenv").config();
const axios = require("axios");

// Define the base URL for IntelX API
const BASE_URL = "https://phonebook.intelx.io/";

// Retrieve the API key from the .env file
const API_KEY = process.env.INTELX_API_KEY;

// Function to query dark web data based on specified term
async function queryDarkWeb(term) {
  try {
    // Set up request options
    const options = {
      method: "GET",
      url: `${BASE_URL}phonebook/search`,
      headers: {
        "x-key": API_KEY,
      },
      params: {
        term: term, // The search term: a domain or company name
      },
    };

    // Send request to IntelX API
    const response = await axios.request(options);

    // Check if data was returned
    if (response.data && response.data.records) {
      return {
        success: true,
        data: response.data.records, // Format data for easy integration
      };
    } else {
      return { success: false, message: "No data found for this search term." };
    }
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error querying IntelX API:", error);
    return { success: false, message: error.message };
  }
}

// Sample call to the function
queryDarkWeb("example.com").then((result) => {
  console.log("Query result:", result);
});

module.exports = { queryDarkWeb };
