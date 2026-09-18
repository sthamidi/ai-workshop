const fs = require('fs');

// Get command line arguments
const filename = process.argv[2];
const lines = parseInt(process.argv[3]) || 10;

// Read the file
const content = fs.readFileSync(filename, 'utf-8');

// Split into lines and get first N
const allLines = content.split('\n');
const firstLines = allLines.slice(0, lines);

// Display them
console.log(firstLines.join('\n'));
