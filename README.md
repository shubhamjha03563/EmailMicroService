# emailService

Microservice to send email through Gmail.

## Install Dependencies

```
npm install or npm i
```

## Run App

```
npm start
```

Provide body JSON in the form -

{


  "to": "testReceiver@gmail.com",

  "from": "testSender@gmail.com",

  "fromName": "senderName",
  
  "email_password": "senderEmailPassword",

  "subjct": "subjectOfTheEmail",

  "email_body": "emailBody"

}
