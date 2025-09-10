# Data Model

## Entities

### Repository
- **Purpose**: Represents the GitHub repository to be cloned and set up.
- **Fields**:
  - `url` (string, required): The Git URL of the repository (e.g., https://github.com/payloadcms/website)
  - `branch` (string, optional): The branch to clone (default: main)
  - `commit` (string, optional): Specific commit hash to checkout
- **Validation**:
  - `url` must be a valid Git URL
  - `branch` must exist in the repository
- **Relationships**:
  - Has many Dependencies
  - Used by Development Server

### Dependencies
- **Purpose**: Represents the Node.js packages required for the project.
- **Fields**:
  - `name` (string, required): Package name (e.g., payload)
  - `version` (string, required): Version constraint (e.g., ^2.0.0)
  - `type` (string, required): Type of dependency (dev/prod)
- **Validation**:
  - `name` must be valid npm package name
  - `version` must be valid semver
- **Relationships**:
  - Belongs to Repository

### Development Server
- **Purpose**: Represents the local development server instance.
- **Fields**:
  - `host` (string, required): Host address (default: localhost)
  - `port` (number, required): Port number (default: 3000)
  - `status` (string, required): Current status (running/stopped/error)
- **Validation**:
  - `port` must be between 1024 and 65535
  - `status` must be one of: running, stopped, error
- **Relationships**:
  - Uses Repository

## State Transitions
- Repository: cloned → dependencies installed → server started
- Dependencies: not installed → installed
- Development Server: stopped → starting → running → stopped</content>
<parameter name="filePath">/Users/hazarekiz/Projects/payloadcms_offical/specs/001-https-github-com/data-model.md
