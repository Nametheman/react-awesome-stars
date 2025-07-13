# Publishing Guide

This guide will walk you through the process of publishing the React Star Rating Component to npm.

## Prerequisites

1. **npm account**: Make sure you have an npm account at https://www.npmjs.com/
2. **npm CLI**: Install npm CLI globally if not already installed
3. **Authentication**: Login to npm using `npm login`

## Pre-publishing Checklist

Before publishing, ensure you have:

- [ ] Updated the package name in `package.json` (if needed)
- [ ] Updated the version number in `package.json`
- [ ] Updated author information in `package.json`
- [ ] Updated repository URLs in `package.json`
- [ ] Built the component: `npm run build`
- [ ] Tested the build locally
- [ ] Verified all files are included in the package

## Step-by-Step Publishing Process

### 1. Update Package Information

Edit `package.json` and update:

- `name`: Your desired package name (must be unique on npm)
- `version`: Increment version number (e.g., 1.0.0, 1.0.1, etc.)
- `author`: Your name and email
- `repository.url`: Your GitHub repository URL
- `homepage`: Your package homepage URL
- `bugs.url`: Your issues page URL

### 2. Build the Component

```bash
npm run build
```

This will create the `dist/` directory with:

- `index.js` (CommonJS)
- `index.esm.js` (ES Modules)
- `index.d.ts` (TypeScript declarations)

### 3. Test the Build Locally

```bash
# Create a test directory
mkdir test-package
cd test-package

# Initialize a new npm project
npm init -y

# Install React dependencies
npm install react react-dom

# Link your package locally
npm link ../react-star-rating-component

# Create a test file
echo "import React from 'react';
import { StarRating } from 'react-star-rating-component';

function App() {
  return <StarRating rating={3} />;
}

export default App;" > App.jsx

# Test that it works
node -e "console.log('Package structure:', require('react-star-rating-component'))"
```

### 4. Check Package Contents

```bash
# See what files will be included
npm pack --dry-run
```

### 5. Login to npm

```bash
npm login
```

Enter your npm username, password, and email when prompted.

### 6. Publish the Package

```bash
npm publish
```

If this is the first time publishing this package name, it will be published immediately.

For subsequent versions, you can use:

```bash
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0
npm publish
```

## Post-publishing

### 1. Verify the Package

Check your package on npm:

- Visit https://www.npmjs.com/package/YOUR_PACKAGE_NAME
- Verify all files are included
- Test installation: `npm install YOUR_PACKAGE_NAME`

### 2. Update Documentation

- Update README.md with any new features
- Update version numbers in examples
- Update CHANGELOG.md if you have one

### 3. Tag the Release

```bash
git add .
git commit -m "Release v1.0.0"
git tag v1.0.0
git push origin main --tags
```

## Troubleshooting

### Package Name Already Exists

If the package name is already taken:

1. Choose a different name
2. Update `package.json`
3. Update all references in documentation

### Build Errors

- Check TypeScript compilation: `npm run type-check`
- Verify all dependencies are installed: `npm install`
- Check Rollup configuration

### Publishing Errors

- Ensure you're logged in: `npm whoami`
- Check if you have permission to publish
- Verify package.json is valid: `npm run lint`

### Version Conflicts

- Use semantic versioning (MAJOR.MINOR.PATCH)
- Check existing versions: `npm view YOUR_PACKAGE_NAME versions`

## Best Practices

1. **Semantic Versioning**: Follow semver.org guidelines
2. **Changelog**: Keep a CHANGELOG.md file
3. **Testing**: Test your package before publishing
4. **Documentation**: Keep README.md up to date
5. **Examples**: Provide clear usage examples
6. **Keywords**: Use relevant keywords in package.json

## Unpublishing

⚠️ **Warning**: Unpublishing can break other people's projects. Only do this if absolutely necessary.

```bash
npm unpublish YOUR_PACKAGE_NAME@VERSION
```

Note: npm has restrictions on unpublishing:

- Can only unpublish within 72 hours of publishing
- Cannot unpublish if other packages depend on it
- Cannot republish the same version

## Maintenance

After publishing:

1. Monitor issues and pull requests
2. Respond to user feedback
3. Plan future releases
4. Keep dependencies updated
5. Maintain documentation
