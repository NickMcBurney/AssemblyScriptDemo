# Assembly Script Experimentation

Trailing WebAssembly using AssemblyScript.

## Getting Started

This project uses AssemblyScript to compile WASM files.

These can be demoed using `public/index.html` which is served by Express.js server.

### Install Packages:
`npm install`

### Compile AssemblyScript > WebAssembly (`.wasm`)
`npm run asbuild`

Look in package.json for other build options e.g. debug and optimized only (default script will build both optimized and debugging versions)

### Run Express Server
`npm run start`
