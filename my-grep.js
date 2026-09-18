const fs = require('fs');

// Get command line arguments
const searchWord = process.argv[2];
const filename = process.argv[3];

// Read the file
const content = fs.readFileSync(filename, 'utf-8');

// Split into lines
const allLines = content.split('\n');

// Find lines containing the search word
const results = allLines.filter(line => line.includes(searchWord));

// Display results
results.forEach(line => console.log(line));
