import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/memes', postRoutes);

const DATABASE_URL = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
const PORT = process.env.PORT || 27017;
mongoose.connect(DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=> console.log('Server connected')))
.catch((e)=> console.log(e.message));

mongoose.set('useFindAndModify', false);