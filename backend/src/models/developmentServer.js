/**
 * DevelopmentServer Model
 * Represents the local development server instance
 */
class DevelopmentServer {
  constructor(host = 'localhost', port = 3000, status = 'stopped') {
    this.host = host;
    this.port = port;
    this.status = status; // 'running', 'stopped', 'error'
  }

  /**
   * Validate the port number
   * @returns {boolean} True if valid
   */
  isValidPort() {
    return this.port >= 1024 && this.port <= 65535;
  }

  /**
   * Get the server URL
   * @returns {string} Full URL
   */
  getUrl() {
    return `http://${this.host}:${this.port}`;
  }

  /**
   * Check if server is running
   * @returns {boolean} True if running
   */
  isRunning() {
    return this.status === 'running';
  }

  /**
   * Set server status
   * @param {string} status - New status
   */
  setStatus(status) {
    const validStatuses = ['running', 'stopped', 'error'];
    if (validStatuses.includes(status)) {
      this.status = status;
    } else {
      throw new Error(`Invalid status: ${status}`);
    }
  }
}

module.exports = DevelopmentServer;
