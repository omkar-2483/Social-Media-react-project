import express from 'express';
const app = express();

import userRouter from './routes/users.js'
import postRouter from './routes/posts.js'
import likeRouter from './routes/likes.js'
import commentRouter from './routes/comments.js'
import authRouter from './routes/auth.js'

import cookieParser from 'cookie-parser';
import cors from 'cors'

//middelwares
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", true);
    next();
})

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(cookieParser())

app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/comments', commentRouter)
app.use('/api/likes', likeRouter)
app.use('/api/auth', authRouter)

app.get('/',(req,res)=>{
    res.send("home")
})

app.listen(8800,()=>{
    console.log(`http://localhost:8800/`);
})