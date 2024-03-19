import { Router } from "express"
import { ProdutoController } from "./produto.controller"

export class ProdutoRoute {
    private produtoRouter: Router
    private produtoController: ProdutoController

    constructor(produtoController: ProdutoController) {
        this.produtoRouter = Router();
        this.produtoController = produtoController
        this.initializeRouter()
    }

    initializeRouter() {
        this.produtoRouter.post('/', this.produtoController.createProduto.bind(this.produtoController))
        this.produtoRouter.get('/', this.produtoController.getProduto.bind(this.produtoController))
        this.produtoRouter.delete('/:id', this.produtoController.deleteProduto.bind(this.produtoController))
    }

    getRouter() {
        return this.produtoRouter
    }
}
