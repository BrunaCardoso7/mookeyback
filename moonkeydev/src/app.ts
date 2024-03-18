import { UserController } from './User/user.controller';
import express from 'express'
import { UserRouter } from './User/user.router'
import { UserService } from './User/user.service';
const port = 3000
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userService = new UserService()
const userController = new UserController(userService)
const userRouter = new UserRouter(userController)

app.use('/user', userRouter.getRouter())

app.listen(port, ()=> {
    console.log("servidor aberto na porta localhost:"+port)
})