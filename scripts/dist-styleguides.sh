#!/bin/sh

# Exit the script on any command with non 0 return code
set -e

# Echo every command being executed
set -x

# Go to project root
cd "$(dirname "$0")"
cd ..

# Build styleguides
yarn --cwd "./src/systems/ec/implementations/vanilla/styleguide" dist
yarn --cwd "./src/systems/eu/implementations/vanilla/styleguide" dist

# Copy builds
rm -rf ./dist/styleguide
mkdir -p ./dist/styleguide
cp -r ./src/systems/ec/implementations/vanilla/styleguide/dist ./dist/styleguide/ec
cp -r ./src/systems/eu/implementations/vanilla/styleguide/dist ./dist/styleguide/eu