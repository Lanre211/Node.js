
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password',
  },
});


const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'recipientemail@example.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js using nodemailer.',
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
