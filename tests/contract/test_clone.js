const { cloneRepository } = require('../../scripts/setup');

describe('Clone Contract', () => {
  test('should clone repository successfully', async () => {
    const url = 'https://github.com/payloadcms/website';
    const directory = 'test-repo';

    // This test will fail until the function is implemented
    const result = await cloneRepository(url, directory);
    expect(result).toBe('Repository cloned successfully');
  });

  test('should handle invalid URL', async () => {
    const invalidUrl = 'invalid-url';
    const directory = 'test-repo';

    await expect(cloneRepository(invalidUrl, directory)).rejects.toThrow('Failed to clone repository');
  });
});
