/**
 * Repository Model
 * Represents a GitHub repository
 */
class Repository {
  constructor(url, branch = 'main', commit = null) {
    this.url = url;
    this.branch = branch;
    this.commit = commit;
  }

  /**
   * Validate the repository URL
   * @returns {boolean} True if valid
   */
  isValidUrl() {
    const gitUrlRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(\.git)?$/;
    return gitUrlRegex.test(this.url);
  }

  /**
   * Get repository name from URL
   * @returns {string} Repository name
   */
  getName() {
    const match = this.url.match(/\/([a-zA-Z0-9_-]+)(\.git)?$/);
    return match ? match[1] : 'unknown';
  }
}

module.exports = Repository;
