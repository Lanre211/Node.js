const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Data written to welcome.txt');
});

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Data read from welcome.txt:', data);
});
