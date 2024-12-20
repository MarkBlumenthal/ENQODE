# Darkweb Scanner API

This project is a Node.js-based API that uses the [LeakCheck Public API](https://wiki.leakcheck.io/en/api/public) to check for dark web data breaches related to a specified email or website. The API queries the LeakCheck database and returns structured information about where and when the data was found in breaches.

## Features

- **Search for data breaches** by website or email.
- **Returns structured data** including breach sources and exposed fields.
- **Testable with Postman** or similar tools for easy integration into applications.

## Requirements

- Node.js and npm installed on your system.
- [LeakCheck Public API](https://wiki.leakcheck.io/en/api/public) access (no API key required for the public version).

## Installation

1. Navigate to: cd Part2 and then cd darkweb-scanner

Initialize npm: Run the following command to create a package.json file for your project.

npm init -y
Install Dependencies:  express for setting up a server.

npm install express

Start the Server: Run the following command to start the API server on localhost:3000:

node scanner.js
you should see in your terminal: Server running on http://localhost:3000

# Testing with Postman:

Open Postman and set up a GET request to http://localhost:3000/checkBreach.
Add a query parameter:
Key: identifier
Value: the website you wish to check (e.g., facebook.com).
Click Send to see the response.
Example Response
json

{
    "success": true,
    "found": 3,
    "fields": [
        "origin",
        "username",
        "password",
        "country",
        "dob"
    ],
    "sources": [
        { "name": "Dubsmash.com", "date": "2018-12" },
        { "name": "Stealer Logs", "date": "" },
        { "name": "Fling.com", "date": "2011-03" }
    ]
}



# Testing with nslookup with Postman:

Open Postman and set up a GET request to http://localhost:3000/nslookup.
Add a query parameter:
Key: domain
Value: the website you wish to check (e.g., facebook.com).
Click Send to see the response.
Example Response
json

<pre>
Server:  8.8.8.8
Address: 8.8.8.8#53

Non-authoritative answer:
Name:    google.com
Address: 142.250.190.78
</pre>


Project Structure
scanner.js: Main file containing API logic and Express server setup.
README.md: Project documentation.
Notes
Limitations: The public API is rate-limited to 1 request per second and does not provide password data or other sensitive information.
No API Key Required: The public version of the LeakCheck API does not require authentication, which simplifies setup but may have limited data.