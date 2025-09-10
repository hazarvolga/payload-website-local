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
  // Main execution logic will be added
  process.exit(0);
}
