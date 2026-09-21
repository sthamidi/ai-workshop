# Fancy Command: fancyCat Report

## 1. Fancy Command Specification

### Purpose
This command combines `cat` and `wc` into one tool. It displays the contents of a file AND shows how many lines are in that file.

### Syntax
node fancy-command.js <filename>

### Edge Cases

**Edge Case 1: File does not exist**
- Input: node fancy-command.js nonexistent.txt
- Expected: Error message saying file cannot be read

**Edge Case 2: Empty file**
- Input: node fancy-command.js empty.txt
- Expected: No content displayed, but shows line count

## 2. Testing
![Test Output](Screenshot%202026-09-20%20211123.png) 
### Test Case 1: Normal file
- Command: node fancy-command.js test.txt
- Expected: File contents + line count
- Result: Works correctly

### Test Case 2: File does not exist
- Command: node fancy-command.js missing.txt
- Expected: Error message
- Result: Shows error

## 3. Testing Reflection

### Issues Found
None - worked as expected

### Changes Made
None needed

### How AI Helped
AI helped me understand how to use fs.readFileSync() to read files, split content to count lines, and handle errors.
