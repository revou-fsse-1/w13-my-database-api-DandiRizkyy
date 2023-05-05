import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProduct } from './dto/create-product.dto';
import { UpdateProduct } from './dto/update-product.dto';
import { PatchProduct } from './dto/patch-product.dto';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService){}

    // get all product + query
    @Get()
    getAllProducts(@Query('q') query: string){
        return this.productService.getAllProducts(query)
    }

    // get by id
    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number){
        return this.productService.getProductById(id)
    }

    // create product
    @Post()
    createProduct(
    @Body('userId', ParseIntPipe) userId: number, 
    @Body() productDto: CreateProduct){
        return this.productService.createProduct(userId, productDto)
    }

    // update product
    @Put(':id')
    updateProduct(
    @Param('id', ParseIntPipe) id: number, 
    @Body() productDto: UpdateProduct){
        return this.productService.updateProduct(id, productDto)
    }

    // update product (PATCH)
    @Patch(':id')
    updateProductPatch(
    @Param('id', ParseIntPipe) id: number, 
    @Body() productDto: PatchProduct){
        return this.productService.updateProductPatch(id, productDto)
    }

    // delete product
    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number){
        return this.productService.deleteProduct(id)
    }

}
