import * as express from 'express';
import * as twilio from 'twilio';

const accountSid = '{{ account_sid }}'
const authToken = '{{ auth_token }}'

const client = new twilio.RestClient(accountSid, authToken);

export const router2 = express.Router();

router2.get('/twilio', (req, res, next) => {
    const msg = {
        body: 'Hello, babe!',
        to: '+12345678901',  
        from: '+12345678901' 
    }

    client.messages.create(msg, (err, message) => {
        if(err) { 
            res.json(err);
        } else {
            res.json(message);
        }
    });
});

