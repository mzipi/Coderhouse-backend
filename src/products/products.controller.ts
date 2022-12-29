import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { Products } from 'src/interfaces/products.interface';

@Controller('api/products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        this.productsService.create(createProductDto);
    }

    @Get()
    async findAll(): Promise<Products[]> {
        return this.productsService.findAll();
    }

    @Put()
    async update(@Body() createProductDto: CreateProductDto) {
        this.productsService.create(createProductDto);
    }

    @Delete()
    async del(): Promise<Products[]> {
        return this.productsService.findAll();
    }
}
