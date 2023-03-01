import express, { Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (_, res: Response) => {
  res.status(200).send('Hello');
});

app.listen(4000, () => {
  console.log('Server is up!');
});
