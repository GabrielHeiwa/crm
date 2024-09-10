import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "products_list" })
export class ProductsList {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    sequence: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: null | Date;

    @OneToOne(() => Product)
    @JoinColumn({ name: "fk_product" })
    fkProduct: Product;
}
