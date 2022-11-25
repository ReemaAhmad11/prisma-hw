import express from 'express';
import 'dotenv/config';
import { movieDB ,userDB} from './config/db';
import movieRouters from './routers/movie_route';
import userRouters from './routers/user_route';

const app = express();

//config 
movieDB();
userDB();

app.use(express.json());

app.use('/movie', movieRouters);
app.use('/user', userRouters);


app.listen(5005, () => {
  console.log('Server is running on port 5005');
});
