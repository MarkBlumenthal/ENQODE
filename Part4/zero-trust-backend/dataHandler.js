const fs = require('fs');
const path = require('path');

// File path to store the Zero-Trust data
const dataFilePath = path.join(__dirname, 'zeroTrustData.json');

// Read data from the file
const readDataFromFile = () => {
    if (fs.existsSync(dataFilePath)) {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
};

// Write data to the file
const writeDataToFile = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// Check if the data already exists in the file
const isDuplicate = (newData) => {
    const zeroTrustData = readDataFromFile();

    return zeroTrustData.some(entry =>
        entry.averageShannonShannonEntropyScore === newData.averageShannonShannonEntropyScore &&
        entry.firewallDetected === newData.firewallDetected &&
        entry.DNSsecEnabled === newData.DNSsecEnabled &&
        entry.tlsVersion === newData.tlsVersion &&
        entry.certificateBitStrength === newData.certificateBitStrength &&
        JSON.stringify(entry.securityHeadersImplemented) === JSON.stringify(newData.securityHeadersImplemented) &&
        entry.openPortsDetected === newData.openPortsDetected
    );
};

module.exports = {
    readDataFromFile,
    writeDataToFile,
    isDuplicate
};
