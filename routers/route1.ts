import * as express from 'express';

export const router1 = express.Router();

router1.route('/endpoint1')
       .get((req, res, next) => {
           res.end(req.query.color);          
       })
       
       