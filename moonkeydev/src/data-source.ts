import "reflect-metadata"
import { DataSource } from "typeorm"
import { Client } from "./User/user.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "brunadev",
    password: "bruna8596@",
    database: "moonkey",
    synchronize: true,
    logging: false,
    entities: [Client],
    migrations: [],
    subscribers: [],
})
