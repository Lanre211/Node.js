
const generatePassword = require('generate-password');


const passwordOptions = {
  length: 12,            
  numbers: true,         
  symbols: true,         
  uppercase: true,       
  excludeSimilar: true,  
};


const password = generatePassword.generate(passwordOptions);

console.log('Generated Password:', password);
