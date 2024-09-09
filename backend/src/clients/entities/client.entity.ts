import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "clients" })
export class Client {
    @PrimaryGeneratedColumn('increment')
    id: Number;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true, nullable: true })
    cpf: string;

    @Column({ unique: true, nullable: true })
    cnpj: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "udpated_at" })
    updatedAt: Date;

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: null | Date;

    @OneToOne(() => User)
    @JoinColumn({ name: "fk_user" })
    fkUser: User;
}
