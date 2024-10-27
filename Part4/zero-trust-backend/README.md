# Zero-Trust Score Backend

## Description
This is a backend service built using Node.js and Express to collect and store Zero-Trust Score data. The data is stored in a local JSON file for future retrieval.

## Requirements
- Node.js v14 or higher
- Postman for testing API requests

## Setup Instructions

1. navigat to the folder cd Part4 - cd zero-trust-backend

Install the necessary dependencies:
npm install

Run the backend server:
node index.js

The server will start at http://localhost:3000.


# Testing in postman

1. Description: Submits a Zero-Trust Score entry and stores it in the backend (JSON file).
Request Body raw(JSON):
URL: http://localhost:3000/submit
Post

json
Copy code
{
  "averageShannonShannonEntropyScore": 7.8,
  "firewallDetected": true,
  "DNSsecEnabled": true,
  "tlsVersion": "1.2",
  "certificateBitStrength": 2048,
  "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
  "openPortsDetected": 12
}


Responses:
201 Created: If the data is successfully submitted. (you should see a zeroTrustData.json file created in your project, this is saved and can be used for later)
409 Conflict: If duplicate data is submitted.(A second file containing the same data will not be created)



2. Description: Retrieves all stored Zero-Trust Score entries.
Response Body raw(JSON):
json
URL: http://localhost:3000/data
GET
Copy code
[
  {
    "averageShannonShannonEntropyScore": 7.8,
    "firewallDetected": true,
    "DNSsecEnabled": true,
    "tlsVersion": "1.2",
    "certificateBitStrength": 2048,
    "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
    "openPortsDetected": 12
  }
]






Project Structure

zero-trust-backend
│
├── index.js           # Main server file (Express API)
├── dataHandler.js     # Handles file storage and deduplication logic
└── zeroTrustData.json # Data storage file (created after first POST request)
Testing the API
You can test the API using Postman:

POST /submit to submit Zero-Trust data.
GET /data to retrieve stored Zero-Trust data.