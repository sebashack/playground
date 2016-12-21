import * as express from 'express';
import { twilioHandler } from './handlers';


export const router2 = express.Router();

router2.get('/twilio', twilioHandler);

