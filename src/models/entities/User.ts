import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

/**
 * User Entity
 *
 * @author Yepeng Ding
 */
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    age: number

}
