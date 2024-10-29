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




// ************************************************************************************************************







// const fs = require('fs').promises;
// const path = require('path');

// // File path to store the Zero-Trust data
// const DATA_FILE_PATH = path.join(__dirname, 'zeroTrustData.json');

// // Read data from the file asynchronously
// const readDataFromFile = async () => {
//     try {
//         const data = await fs.readFile(DATA_FILE_PATH, 'utf8');
//         return JSON.parse(data);
//     } catch (error) {
//         if (error.code === 'ENOENT') return []; // File not found
//         throw new Error('Failed to read data from file');
//     }
// };

// // Write data to the file asynchronously
// const writeDataToFile = async (data) => {
//     try {
//         await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2), 'utf8');
//     } catch (error) {
//         throw new Error('Failed to write data to file');
//     }
// };

// // Check if the data already exists in the file
// const isDuplicate = async (newData) => {
//     const zeroTrustData = await readDataFromFile();

//     return zeroTrustData.some(entry => {
//         return Object.keys(newData).every(key => 
//             JSON.stringify(entry[key]) === JSON.stringify(newData[key])
//         );
//     });
// };

// module.exports = {
//     readDataFromFile,
//     writeDataToFile,
//     isDuplicate
// };
