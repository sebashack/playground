import * as express from 'express';
import * as path from 'path';
import { router1 } from './routers/route1';
import { router2 } from './routers/route2';
import { homeRouter, htmlHomeRouter } from './routers/home_route'



const app = express();

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

app.use(homeRouter)
   .use(htmlHomeRouter)    
   .use('/to', router1)
   .use('/static', express.static(__dirname + '/public'))
   .use('/msg', router2)

app.listen(3000, function() {
    console.log('App started on port 3000');
});


