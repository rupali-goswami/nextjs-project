const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const main=async(data) =>{
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    host: 'smtp.zoho.com',
  port: 465,
  secure: true,
    // service: 'gmail',
    auth: {
        user: 'rupali.goswami@graffersid.com',
        pass: '123456'
    }
});
  // send mail with defined transport object
  let mailOptions = {
    from: 'rupali.goswami@graffersid.com', // sender address
    to: [data.email], // list of receivers
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'

  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      return "mail sent"
      console.log('Email sent: ' + info.response);
    }
  });
 
}

module.exports= main
