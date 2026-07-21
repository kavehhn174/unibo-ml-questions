#!/bin/bash
# Double-click (or run `./run.sh`) to start the MLDM Quiz App.
# It installs dependencies on first run, then starts the dev server
# and opens the app in your default browser.

set -e
cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  echo "Installing dependencies (first run only, this may take a minute)..."
  npm install
fi

echo "Starting MLDM Quiz App... it will open in your browser shortly."
npm run dev

# Keep the terminal window open if the dev server exits unexpectedly.
read -n 1 -s -r -p "Press any key to close this window..."
echo
