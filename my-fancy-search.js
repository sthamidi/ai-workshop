const fs = require('fs');

// Get command line arguments
const searchWord = process.argv[2];
const filename = process.argv[3];
const limit = parseInt(process.argv[4]) || 3;

// Read the file
const content = fs.readFileSync(filename, 'utf-8');

// Split into lines
const allLines = content.split('\n');

// Find lines containing the search word
const results = allLines.filter(line => line.includes(searchWord));

// Get only first N results
const limitedResults = results.slice(0, limit);

// Display results
console.log(`Found ${results.length} matches. Showing first ${limit}:`);
limitedResults.forEach(line => console.log(line));
