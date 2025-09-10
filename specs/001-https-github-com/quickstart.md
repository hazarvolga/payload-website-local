# Quickstart Guide: Set up Payload CMS Website Locally

## Prerequisites
- Node.js 18 or higher installed
- npm installed
- Git installed
- Internet connection

## Automated Setup (Recommended)

Use the provided setup script for a one-command installation:

```bash
node scripts/setup.js [repository-url] [directory-name] [port]
```

**Example**:
```bash
node scripts/setup.js https://github.com/payloadcms/website payload-website 3000
```

**Default values**:
- Repository URL: https://github.com/payloadcms/website
- Directory: payload-website
- Port: 3000

The script will automatically:
1. Clone the repository
2. Install dependencies
3. Start the development server

## Manual Setup

If you prefer to do it step by step:

### 1. Clone the Repository
```bash
git clone https://github.com/payloadcms/website payload-website
cd payload-website
```

**Expected Output**: Repository cloned successfully.

### 2. Install Dependencies
```bash
npm install
```

**Expected Output**: Dependencies installed successfully. This may take a few minutes.

### 3. Start the Development Server
```bash
npm run dev
```

**Expected Output**: Server running on http://localhost:3000

### 4. Access the Website
Open your browser and navigate to http://localhost:3000

You should see the Payload CMS website running locally.

## Troubleshooting

### If cloning fails:
- Check your internet connection
- Verify the repository URL is correct
- Ensure Git is installed and configured

### If installation fails:
- Check Node.js and npm versions
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and try again

### If server fails to start:
- Check if port 3000 is available
- Look for error messages in the console
- Ensure all dependencies are installed

## Next Steps
- Explore the admin panel at http://localhost:3000/admin
- Modify the code and see hot reload in action
- Refer to Payload CMS documentation for customization</content>
<parameter name="filePath">/Users/hazarekiz/Projects/payloadcms_offical/specs/001-https-github-com/quickstart.md
