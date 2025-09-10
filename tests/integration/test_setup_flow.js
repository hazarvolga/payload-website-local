const { cloneRepository, installDependencies, startDevServer } = require('../../scripts/setup');

describe('Full Setup Flow Integration', () => {
  test('should complete full setup flow', async () => {
    const url = 'https://github.com/payloadcms/website';
    const directory = 'test-payload-website';
    const port = 3001; // Use different port to avoid conflicts

    // Clone repository
    const cloneResult = await cloneRepository(url, directory);
    expect(cloneResult).toBe('Repository cloned successfully');

    // Install dependencies
    const installResult = await installDependencies(directory);
    expect(installResult).toBe('Dependencies installed successfully');

    // Start dev server
    const serverResult = await startDevServer(directory, port);
    expect(serverResult).toBe(`Server running on http://localhost:${port}`);
  }, 60000); // Increase timeout for long operations

  test('should handle errors in setup flow', async () => {
    const invalidUrl = 'invalid-url';
    const directory = 'test-repo';

    await expect(cloneRepository(invalidUrl, directory)).rejects.toThrow('Failed to clone repository');
  });
});
