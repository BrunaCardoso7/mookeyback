import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class  Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    telefone: string

    @Column()
    email: string

    @Column()
    password: string
}