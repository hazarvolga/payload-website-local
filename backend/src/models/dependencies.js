/**
 * Dependencies Model
 * Represents Node.js package dependencies
 */
class Dependencies {
  constructor(name, version, type = 'prod') {
    this.name = name;
    this.version = version;
    this.type = type; // 'dev' or 'prod'
  }

  /**
   * Validate the package name
   * @returns {boolean} True if valid
   */
  isValidName() {
    const packageNameRegex = /^[a-zA-Z0-9_-]+$/;
    return packageNameRegex.test(this.name);
  }

  /**
   * Validate the version constraint
   * @returns {boolean} True if valid semver
   */
  isValidVersion() {
    const semverRegex = /^[\^~]?(\d+\.)?(\d+\.)?(\*|\d+)$/;
    return semverRegex.test(this.version);
  }

  /**
   * Get installation command
   * @returns {string} npm install command
   */
  getInstallCommand() {
    return `npm install ${this.type === 'dev' ? '--save-dev' : '--save'} ${this.name}@${this.version}`;
  }
}

module.exports = Dependencies;
