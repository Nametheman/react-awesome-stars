# Development Guide

This guide will help you set up the development environment for the React Star Rating Component.

## Prerequisites

- Node.js >= 14.0.0
- npm or yarn

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-star-rating-component.git
cd react-star-rating-component
```

2. Install dependencies:

```bash
npm install
```

## Development Commands

### Build the component

```bash
npm run build
```

### Watch mode for development

```bash
npm run dev
```

### Clean build artifacts

```bash
npm run clean
```

### Lint code

```bash
npm run lint
```

### Fix linting issues

```bash
npm run lint:fix
```

### Type checking

```bash
npm run type-check
```

## Project Structure

```
react-star-rating-component/
├── src/
│   ├── StarRating.tsx    # Main component
│   └── index.ts          # Export file
├── examples/
│   └── App.tsx           # Demo application
├── dist/                 # Build output (generated)
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript configuration
├── rollup.config.js      # Rollup bundler configuration
├── .eslintrc.js          # ESLint configuration
├── README.md             # Documentation
└── LICENSE               # MIT License
```

## Building for Production

1. Run the build command:

```bash
npm run build
```

2. The build will generate:
   - `dist/index.js` - CommonJS bundle
   - `dist/index.esm.js` - ES Module bundle
   - `dist/index.d.ts` - TypeScript declarations

## Publishing to npm

1. Update the version in `package.json`
2. Build the component: `npm run build`
3. Publish to npm: `npm publish`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run linting: `npm run lint`
6. Submit a pull request

## Testing

To test the component locally:

1. Build the component: `npm run build`
2. Link it locally: `npm link`
3. In your test project: `npm link react-star-rating-component`
4. Import and use the component

## Troubleshooting

### Build Issues

- Make sure all dependencies are installed: `npm install`
- Clean and rebuild: `npm run clean && npm run build`

### TypeScript Errors

- Run type checking: `npm run type-check`
- Check `tsconfig.json` configuration

### Linting Issues

- Run linting: `npm run lint`
- Auto-fix issues: `npm run lint:fix`
