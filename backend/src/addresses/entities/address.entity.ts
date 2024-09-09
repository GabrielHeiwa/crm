import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "addresses" })
export class Address {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    street: string;

    @Column()
    neightborhood: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column({ name: "zip_code" })
    zipCode: string;

    @Column()
    state: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: null | Date;

    @ManyToOne(() => User, user => user.addresses)
    @JoinColumn({ name: "fk_user" })
    fkUser: User;

}
