const fs = require('fs');
const path = require('path');

try {
  const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  const styleCss = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');
  const appJs = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');

  // Replace stylesheet link with inline style block
  let mergedHtml = indexHtml.replace(
    '<link rel="stylesheet" href="style.css">',
    `<style>\n${styleCss}\n</style>`
  );

  // Replace script source link with inline script block
  mergedHtml = mergedHtml.replace(
    '<script src="app.js"></script>',
    `<script>\n${appJs}\n</script>`
  );

  fs.writeFileSync(path.join(__dirname, 'index_standalone.html'), mergedHtml, 'utf8');
  console.log('Standalone build completed: index_standalone.html has been created successfully!');
} catch (err) {
  console.error('Build failed:', err);
}
