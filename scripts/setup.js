#!/usr/bin/env node

/**
 * Setup script for Payload CMS website local development
 * This script automates the process of cloning, installing dependencies, and running the dev server
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Payload CMS Website Local Setup');
console.log('================================');

/**
 * Start the development server
 * @param {string} directory - Project directory
 * @param {number} port - Port to run the server
 * @returns {Promise<string>} Success message
 */
function startDevServer(directory, port) {
  return new Promise((resolve, reject) => {
    const command = `cd ${directory} && npm run dev -- --port ${port}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Failed to start server: ${error.message}`));
      } else {
        resolve(`Server running on http://localhost:${port}`);
      }
    });
  });
}

// Export for testing
module.exports = { cloneRepository, installDependencies, startDevServer };

// Placeholder for main execution
if (require.main === module) {
  const url = process.argv[2] || 'https://github.com/payloadcms/website';
  const directory = process.argv[3] || 'payload-website';
  const port = parseInt(process.argv[4]) || 3000;

  console.log(`Setting up Payload CMS website from ${url}...`);

  cloneRepository(url, directory)
    .then(() => {
      console.log('✓ Repository cloned');
      return installDependencies(directory);
    })
    .then(() => {
      console.log('✓ Dependencies installed');
      return startDevServer(directory, port);
    })
    .then((message) => {
      console.log('✓ ' + message);
      console.log('Setup complete! Visit the website at the URL above.');
    })
    .catch((error) => {
      console.error('Setup failed:', error.message);
      process.exit(1);
    });
}
