import * as express from 'express';
import { router1 } from './routers/route1';
import { router2 } from './routers/route2';

let app = express();
app.get('/', (req, res, next) => {
        res.end('get'); 
    })
   .use('/to', router1)
   .use('/static', express.static(__dirname + '/public'))
   .use('/msg', router2)



app.listen(3000, function() {
    console.log('App started on port 3000');
});


