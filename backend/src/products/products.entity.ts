// users/user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
name: "products" // Đặt tên cho bảng
})
export class ProductsEntity {
    @PrimaryGeneratedColumn()
	id: string
	
    @Column()
    thumbnail: string

	@Column()
	title: string
	
	@Column()
	author: string
	
	@Column()
    price: string

    @Column()
    discount: number

    @Column()
    star: number

    @Column()
    productSold: number

    @Column()
    auth: boolean

    @Column()
    freeship: boolean

    @Column()
    topdeal: boolean

    @Column()
    ship2h: boolean

    @Column()
    shipDate: string

    @Column()
    priceDecrease: number
}