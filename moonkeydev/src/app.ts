import { UserController } from './User/user.controller';
import express from 'express'
import { UserRouter } from './User/user.router'
import { UserService } from './User/user.service';
import { ProdutoRoute } from './Produto/produto.route';
import { ProdutoController } from './Produto/produto.controller';
import { ProdutoService } from './Produto/produto.service';
import { VendaProdutoService } from './Venda_Produto/venda_produto.service';
import { VendaProdutoController } from './Venda_Produto/venda_produto.controller';
import { VendaProdutoRouter } from './Venda_Produto/venda_produto.router';
const port = 3000
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userService = new UserService()
const userController = new UserController(userService)
const userRouter = new UserRouter(userController)
app.use('/user', userRouter.getRouter())

const produtoService = new ProdutoService()
const produtoController = new ProdutoController(produtoService)
const produtoRouter = new ProdutoRoute(produtoController)
app.use('/produto', produtoRouter.getRouter())

const vendaProdutoService = new VendaProdutoService()
const vendaProdutoController = new VendaProdutoController(vendaProdutoService)
const vendaProdutoRouter = new VendaProdutoRouter(vendaProdutoController)
app.use('/venda', vendaProdutoRouter.getRouter())

app.listen(port, ()=> {
    console.log("servidor aberto na porta localhost:"+port)
})