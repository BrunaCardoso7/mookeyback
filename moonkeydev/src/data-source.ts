import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./User/user.entity"
import { ClientTable1710717866220 } from "./migrations/1710717866220-ClientTable"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "brunadev",
    password: "bruna8596@",
    database: "moonkey",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [ClientTable1710717866220],
    subscribers: [],
})
AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})