import * as express from 'express';
import { endpoint1Handler } from './handlers';

export const router1 = express.Router();


//Router is decoupled from handler.
router1.route('/endpoint1')
       .get(endpoint1Handler);

       
       

