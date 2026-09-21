const fs = require('fs'):

const filename = process.argv[2];

if (!filename) {
  console.log('Error: Please provide a filename');
  process.exit(1);
}

try {
  const content = fs.readFileSync(filename, 'utf-8');

  console.log('=== FILE CONTENT ===');
  console.log(content):

  const lines = content.split('\n').length;

  console.log('=== LINE COUNT ===');
  console.log(`Total lines: ${lines}`);

} catch (error) { 
  console.log(`Error: Could not read file "{filename}"`);
  process.exit(1);
}

