
import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "digital_products" })
export class DigitalProduct {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ name: "url_to_download" })
    urlToDownload: string;

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
