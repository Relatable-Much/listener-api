require('module-alias/register');
import Express from 'express';
import Cors from 'cors';
import Helmet from 'helmet';
import Morgan from 'morgan';

import router from '~/routes';
import config from '~/config';

const app = Express();

(async () => {
  app.use(Morgan('tiny'));
  app.use(Cors());
  app.use(Helmet());
  app.use(Express.json());

  app.use('/api', router);

  app.listen(config.APP.PORT, config.APP.HOST, () => {
    console.log(`Listening on ${config.APP.HOST}:${config.APP.PORT}`);
  });
})();

export default app;
