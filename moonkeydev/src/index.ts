import { AppDataSource } from "./data-source"
import { Produto } from "./Produto/produto.entity"
import { User } from "./User/user.entity"

AppDataSource.initialize().then(async () => {

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    const produtos = await AppDataSource.manager.find(Produto)
    console.log("Loaded users: ", users)
    console.log("Loaded produtos: ", produtos)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
