import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './products.entity';
import { Like, Repository } from 'typeorm';
import { ProductsDto } from './products.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity) private readonly productsRepository: Repository<ProductsEntity>
    ) {}

    async get(numOfShowMoreClicked: number): Promise<ProductsDto[]> {
        return await this.productsRepository.find({
            take: (15 + numOfShowMoreClicked*15),
        });
    }

    async filterSearch(input: string): Promise<string[]> {
        const products1 =  await this.productsRepository.find({
            select: {
                title: true,
            },
            where: [
                {title: Like(`${input}%`)},
            ]
        });
        //products1 is an array of ProductsEntity

        const productsTitle = products1.map((product) => product.title)
        //productsTitle is an array of string

        const products2 = await this.productsRepository.find({
            select: {
                author: true,
            },
            where: [
                {author: Like(`${input}%`)},
            ]
        });
        const productsAuthor = products2.map((product) => product.author)

        return [...new Set(productsTitle.concat(productsAuthor))]
    }

    async filterList(input: string): Promise<ProductsDto[]> {
        return await this.productsRepository.find({
            where: [
                {title: Like(`${input}%`)},
                {author: Like(`${input}%`)},
            ]
        });
    }

    async sort(
        sortBy: 'price' | 'productSold', 
        option : 'desc' | 'asc'): Promise<ProductsDto[]> {
        return await this.productsRepository.find({
            order: {
                [sortBy]: `${option}`,
            }
        })
    }

    async filter(
        filterBy: 'freeship' | 'topdeal' | 'ship2h'
    ): Promise<ProductsDto[]> {
        return await this.productsRepository.findBy({
            [filterBy]: true
        })
    }
}
