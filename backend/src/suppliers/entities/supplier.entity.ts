
import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "suppliers" })
export class Supplier {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ unique: true })
    cnpj: string;

    @Column({ unique: true })
    email: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: null | Date;

    @OneToOne(() => User)
    @JoinColumn({ name: "fk_user" })
    fkUser: User

    @OneToMany(() => Product, product => product.id)
    products: Product[]
}
