const fs = require('fs');
const path = require('path');

// Copy fallback.html to the out directory
const publicFallbackPath = path.join(__dirname, 'public', 'fallback.html');
const outFallbackPath = path.join(__dirname, 'out', 'fallback.html');

// Create simple CSS file
const cssContent = `
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #0a0a0a;
  color: #ffffff;
  margin: 0;
  padding: 0;
  border-top: 8px solid red;
  border-bottom: 8px solid green;
  line-height: 1.6;
}

h1 {
  color: yellow !important;
  text-shadow: 2px 2px 4px black;
}

a {
  text-decoration: underline !important;
  color: #5CFFB1;
}

.test-static-css {
  background-color: blue;
  color: white;
  padding: 20px;
  margin: 20px;
  font-size: 24px;
  border-radius: 10px;
}
`;

const outCssPath = path.join(__dirname, 'out', 'styles.css');

try {
  // Copy fallback.html
  if (fs.existsSync(publicFallbackPath)) {
    fs.copyFileSync(publicFallbackPath, outFallbackPath);
    console.log('Fallback HTML copied successfully');
  } else {
    console.log('Fallback HTML not found');
  }

  // Create CSS file
  fs.writeFileSync(outCssPath, cssContent);
  console.log('Static CSS file created successfully');

  // Find all HTML files in the out directory and add CSS link
  const outDir = path.join(__dirname, 'out');
  const htmlFiles = fs.readdirSync(outDir).filter(file => file.endsWith('.html'));

  htmlFiles.forEach(file => {
    const filePath = path.join(outDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add CSS link if not already present
    if (!content.includes('<link rel="stylesheet" href="/styles.css">')) {
      content = content.replace('</head>', '<link rel="stylesheet" href="/styles.css"></head>');
      fs.writeFileSync(filePath, content);
      console.log(`Added CSS link to ${file}`);
    }
  });

} catch (error) {
  console.error('Error in postbuild script:', error);
} 