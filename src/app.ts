import * as express from 'express';
import * as bodyParser from 'body-parser';
import {createConnection} from 'typeorm';

import {UserRoute} from './routes/UserRoute';

class App {
  public app = express.application;
  public userRoute: UserRoute = new UserRoute();

  constructor() {
    this.app = express();
    this.config();
    this.userRoute.routes(this.app);
  }

  private async config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));

    await createConnection()
      .then((connection) => {
        if (connection.isConnected) {
          console.log('Database has been connected');
          console.log('>>> LISTENING <<<');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export default new App().app;