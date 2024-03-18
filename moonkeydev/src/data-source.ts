import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./User/user.entity"
import { ClientTable1710717866220 } from "./migrations/1710717866220-ClientTable"
import { VendasTables1710722768646 } from "./migrations/1710722768646-VendasTables"
import { VendasProdutosTable1710749006215 } from "./migrations/1710749006215-Vendas_ProdutosTable"
import { ProdutosTable1710749699804 } from "./migrations/1710749699804-ProdutosTable"

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
    migrations: [ClientTable1710717866220, VendasTables1710722768646, ProdutosTable1710749699804, VendasProdutosTable1710749006215],
    subscribers: [],
})
AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})