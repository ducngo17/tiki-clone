import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class UsersEntity {
    @PrimaryGeneratedColumn()
    userid: number

    @Column()
    username: string

    @Column() 
    password: string

}