@echo off
echo Starting extraction...
node tmp\extract_assets.js > extract_output.txt 2>&1
echo Done.
