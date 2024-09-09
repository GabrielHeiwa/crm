import { hashSync } from "bcrypt";
import { Address } from "src/addresses/entities/address.entity";
import { Client } from "src/clients/entities/client.entity";
import { Supplier } from "src/suppliers/entities/supplier.entity";
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column({ unique: true, nullable: true })
    cpf: string;

    @Column({ unique: true, nullable: true })
    cnpj: string;

    @Column()
    password: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: null | Date;

    @BeforeInsert()
    beforeInsert() {
        this.password = hashSync(this.password, 10)
    }

    @OneToOne(() => Client)
    fkClient: Client;

    @OneToOne(() => Supplier)
    fkSupplier: Supplier;

    @OneToMany(() => Address, address => address.fkUser)
    addresses: Address;
}
