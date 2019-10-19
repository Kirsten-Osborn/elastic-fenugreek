## What's all this?

This short script creates an automatic voice response to a Twilio Number. 

## Setup

You'll need a **Twilio** phone number. You can sign up [at this link](https://www.twilio.com/try-twilio).

* Head to your [phone number configuration settings](https://www.twilio.com/console/phone-numbers). 
* Click on the phone number you'd like to configure.
* Under *SMS*, change *Configure With* to **Webhooks, TwiML Bins, Functions, Studio, or Proxy**.
* Under *A Call Comes In*, select **Webhook** and set the URL to **https://<your-project-name>.glitch.me/sms**. 

That's it! If this Glitch app is live, when our Twilio number receives an SMS, the *sms* function in *index.js* is called. 



## Technologies used in this project

### NodeJS
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. NodeJS was the platform in which we built this application.

### [Twilio](https://www.twilio.com/)
Twilio is a cloud communications platform as a service company. Twilio allows software developers to programmatically make and receive phone calls, send and receive text messages, and perform other communication functions using its web service APIs. We used twilio as a SMS based proxy between the user and the API.


### NPM packages used


#### [express](https://www.npmjs.com/package/express)
Fast, unopinionated, minimalist web framework for node. This is the framework with which we built the application.

#### [twilio](https://www.npmjs.com/package/twilio)
The node package to communicate with Twilio. We used it to communicate with our users through twilio.


