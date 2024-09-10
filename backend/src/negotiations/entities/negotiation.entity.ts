import { Client } from "src/clients/entities/client.entity";
import { ProductsList } from "src/products_list/entities/products_list.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "negotiations" })
export class Negotiation {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    status: string;

    @Column()
    discount: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: null | Date;

    @OneToOne(() => ProductsList)
    @JoinColumn({ name: "fk_product_list" })
    fkProductList: ProductsList;

    @OneToOne(() => Client)
    @JoinColumn({ name: "fk_client" })
    fkClient: Client;
}
