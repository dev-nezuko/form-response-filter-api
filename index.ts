import express from 'express';
import { filteredResponse } from './controllers/filteredResponse.controller';

const app = express();

app.get('/:formId/filteredResponses', filteredResponse);

app.listen(3001, () => {
  console.log('Listening on http://localhost:3001');
});
