import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createProductDto :CreateProductDto){
    return await this.productsService.create(createProductDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(){
    return await this.productsService.getAll()
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getById(@Param('id') id: string){
    return await this.productsService.getById(id);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(@Param('id') id: string, @Body() productDto: UpdateProductDto){
    return await this.productsService.update(id, productDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: string){
    return await this.productsService.delete(id);
  }
}
