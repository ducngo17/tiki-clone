import { Controller, Get, Param } from '@nestjs/common';
import { ProductsDto } from './products.dto';
import { ProductsService } from './products.service';
import { query } from 'express';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService : ProductsService) {}

    @Get('showmore/:num')
    getAllProducts(@Param('num') num: number): Promise<ProductsDto[]> {
        return this.productsService.get(num)
    }

    @Get('search/:input')
    filterProducts(@Param('input') input: string): Promise<string[]>{
        return this.productsService.filterSearch(input)
    }

    @Get('list/:input')
    displayfilteredList(@Param('input') input: string): Promise<ProductsDto[]>{
        return this.productsService.filterList(input)
    }

    // @Get('sortByPrice')
    // sortByPrice(@Param('option') option: 'asc' | 'desc'): Promise<ProductsDto[]>{
    //     return this.productsService.sortbyPrice(option)
    // }

    // @Get('sortMostBuy')
    // sortMostBuy(@Param('option') option: 'asc' | 'desc'): Promise<ProductsDto[]>{
    //     return this.productsService.sortbyPrice(option)
    // }

    @Get('filter/:input')
    filter(@Param('input') input: 'freeship' | 'topdeal' | 'ship2h'): Promise<ProductsDto[]> {
        return this.productsService.filter(input)
    }
}
