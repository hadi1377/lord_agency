#!/bin/sh
set -e

# Install dependencies if node_modules is empty or doesn't exist
if [ ! -d "node_modules" ] || [ -z "$(ls -A node_modules)" ]; then
  echo "Installing dependencies..."
  if [ -f "yarn.lock" ]; then
    yarn install --frozen-lockfile
  else
    yarn install
  fi
fi

# Execute the command
exec "$@"


