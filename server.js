import express from 'express';
import students from './routes/students.js';
import logger from './middlewares/logger.js';

const port = process.env.PORT || 8000
const app = express();

//  app.use(express.json({
//     type:'multipart/form-data'
//  }));
app.use(logger);

 app.use(express.urlencoded({ extended: true }));
app.use('/api/students', students);

app.listen(port, () => console.log(`Server is running on PORT ${port}`));   