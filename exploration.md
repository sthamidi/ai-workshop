# Step 1: Linux Commands Exploration

## Commands I Tested in Terminal

I tested these 7 commands:
- cat - shows file contents
- ls - lists files and folders
- wc - counts lines, words, characters
- head - shows first lines of a file
- tail - shows last lines of a file
- grep -searches for text in files
- tee - writes to file and screen

## Which Commands I Succuessfully Implemented in Node.js

I created Node.js versions of:
- cat.js (reads and displays file)
-  wc.js (counts lines)

## Commands I'm Combining for My Fancy Command

I will combine: cat + wc

The new command will be called: fancyCat

What it does: Shows file and content AND counts the total lines

## One Thing AI Helped Me Understand

AI helped me understand that Node.js fs.readFileSync() can read files like the cat command does, and .split('\n'). length counts
lines like wc does.
