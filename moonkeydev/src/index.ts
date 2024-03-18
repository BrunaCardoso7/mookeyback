import { AppDataSource } from "./data-source"
import { User } from "./User/user.entity"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.nome = "bruna fernandes"
    user.telefone = "86994193056"
    user.email = "brunafernandes@gmail.com"
    user.password = "bruna123"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
    