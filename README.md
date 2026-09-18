# AI Workshop - Linux Commands Implementation

## Step 1: Explored Commands

I explored and tested the following Linux commands in the terminal:
- `cat` - display file contents
- `wc` - count lines, words, and characters
- `head` - show first N lines
- `tail` - show last N lines
- `grep` - search for a word in a file
- `ls` - list directory contents
- `tee` - write output to file and console

## Step 2: Implemented Commands in Node.js

I successfully implemented:
1. **my-head.js** - Shows the first N lines of a file (like the `head` command)
2. **my-grep.js** - Searches for a word in a file (like the `grep` command)

## Step 3: Fancy Command

I created **my-fancy-search.js** - A combined tool that:
- Searches for a word in a file (grep functionality)
- Shows only the first N results (head functionality)
- Displays how many total matches were found

Example: `node my-fancy-search.js "Linux" sample.txt 3`

## How AI Helped

AI helped me understand:
- How to use `fs.readFileSync()` to read files
- How to use `process.argv` to get command line arguments
- How to use `.split()`, `.filter()`, and `.slice()` for string/array operations
- How to combine multiple command behaviors into one tool

## Testing

All implementations were tested on sample.txt and work correctly.
