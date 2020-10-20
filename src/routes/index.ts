import { Router } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const router = Router();

fs.readdirSync(__dirname)
  .filter((file) => file !== path.basename(__filename) && !/\.map$/.test(path.basename(file)))
  .forEach((file) => {
    router.use('/' + file.split('.')[0], require(`./${file}`).default);
  });

export default router;
