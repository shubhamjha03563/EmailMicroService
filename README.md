# emailService

Microservice to send email through Gmail.

To run the server - npm start

Provide body JSON in the form -

{


  "to": "testReceiver@gmail.com",

  "from": "testSender@gmail.com",

  "fromName": "senderName",
  
  "email_password": "senderEmailPassword",

  "subjct": "subjectOfTheEmail",

  "email_body": "emailBody"

}
