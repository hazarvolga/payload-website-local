const { startDevServer } = require('../../scripts/setup');

describe('Dev Server Contract', () => {
  test('should start dev server successfully', async () => {
    const directory = 'test-repo';
    const port = 3000;

    // This test will fail until the function is implemented
    const result = await startDevServer(directory, port);
    expect(result).toBe('Server running on http://localhost:3000');
  });

  test('should handle invalid directory', async () => {
    const directory = 'invalid-repo';
    const port = 3000;

    await expect(startDevServer(directory, port)).rejects.toThrow('Failed to start server');
  });
});
