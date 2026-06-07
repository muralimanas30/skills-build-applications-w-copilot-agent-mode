import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectDatabase } from './db.js';

dotenv.config();

async function bootstrap() {
  await connectDatabase();

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/health', (_request, response) => {
    response.json({ status: 'ok' });
  });

  const port = Number(process.env.PORT ?? 8000);
  app.listen(port, () => {
    console.log(`OctoFit Tracker backend listening on port ${port}`);
  });
}

bootstrap().catch((error) => {
  console.error('Failed to start backend', error);
  process.exit(1);
});