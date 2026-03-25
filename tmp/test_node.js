import fs from 'fs';
import path from 'path';

const testDir = 'c:/Users/Admin/react-app/Gs_landingpage/test_dir';
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
}
fs.writeFileSync(path.join(testDir, 'test.txt'), 'Hello Node.js');
console.log('Test directory and file created successfully.');
