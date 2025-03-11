// users/user.dto.ts
import { Expose } from "class-transformer"

export class ProductsDto {
    @Expose()
	id: string
	
    @Expose()
    thumbnail: string

	@Expose()
	title: string
	
	@Expose()
	author: string
	
	@Expose()
    price: string

    @Expose()
    discount: number

    @Expose()
    star: number

    @Expose()
    productSold: number

    @Expose()
    auth: boolean

    @Expose()
    freeship: boolean

    @Expose()
    topdeal: boolean

    @Expose()
    ship2h: boolean

    @Expose()
    shipDate: string

    @Expose()
    priceDecrease: number
}
