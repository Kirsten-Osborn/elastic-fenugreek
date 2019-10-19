const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_NUMBER = process.env.TWILIO_PHONE_NUMBER

const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(express.static('public'));

// Authenticate with our Twilio credentials
const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  extended: true
}));

// Function to extract the user's phone number from an incoming SMS
const parseJson = (json) => {
  const { From } = json;
  return {
    phoneNumber: From, 
  };
};



app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST request to /sms in our application
app.post('/sms', (request, response) => {
  
  console.log('message!');
  const { phoneNumber } = parseJson(request.body);

  client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml', 
         to: phoneNumber,
         from: TWILIO_NUMBER,
       })
      .then(call => console.log(call.sid))
      .then(() => {
        const twiml = new MessagingResponse();
        twiml.message('Thank you! We will be calling you shortly.');
        response.send(twiml.toString());
      })
      .done(); 
});

// Create an HTTP server and listen for requests on port 3000
app.listen(port, () => console.log(`Twilio Quest Voice Example app listening on port ` + port))
