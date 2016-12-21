import * as express from 'express';
import * as twilio from 'twilio';


// Twilio's client and credentials
const accountSid = '{{ account_sid }}'
const authToken = '{{ auth_token }}'
const client = new twilio.RestClient(accountSid, authToken);



interface TwilioCall {
    body: string;
    to: string;
    from: string;
}

//Handler fo home page
export const homeHandler: express.RequestHandler = (req, res, next) => {
    res.send('Home Babe');
}


// Nice practice: always separate your handlers from the express dependencies.
export const endpoint1Handler: express.RequestHandler = (req, res, next) => {
    res.json({ 
        color: req.query.color,
        secret: Math.random()
     });  
}



// Decoupling Handlers from router
export const twilioHandler: express.RequestHandler =  (req, res, next) => {
    const twCall: TwilioCall = {
        body: 'Hello, babe!',
        to: '+12345678901',  
        from: '+12345678901' 
    }

    client.messages.create(twCall, (err, message) => {
        if(err) { 
            res.json(err);
        } else {
            res.json(message);
        }
    });
}


