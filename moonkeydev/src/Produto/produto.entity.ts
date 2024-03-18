import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({name: 'produtos'})
export class Produto {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 110, nullable: false})
    nome: string

    @Column()
    quantidade: number

    @Column({type: 'decimal', scale: 2, precision: 10})
    preco: number
}