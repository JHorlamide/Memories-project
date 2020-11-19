import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

/* Custom file */
import connectDB from './database/db.js' 
import postRoutes from './routes/post.js';

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello to memories')
})

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(express.json({extended: false}))

/*Routes*/ 
app.use('/posts', postRoutes)

/*** Connect Database ***/
connectDB()


app.listen(PORT, () => {
  console.log(`Server started on port${PORT}`)
})