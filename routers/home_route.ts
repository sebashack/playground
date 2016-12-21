import * as express from 'express';
import { homeHandler } from './handlers';


export const homeRouter = express.Router();
export const htmlHomeRouter = express.Router();


//Home Router
homeRouter.get('/', homeHandler);


//Rendering Pug
htmlHomeRouter.get('/home', (req, res, next) => {
    res.render('index.pug');
})


