import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products, ProductsDocument } from './schema/products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private productsModule: Model<ProductsDocument>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const itemCreated = await this.productsModule.create(createProductDto);
    return itemCreated;
  }

  async getAll(){
    return await this.productsModule.find();
  }

  async getById(id: string){
    return await this.productsModule.findById(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto){
      return await this.productsModule.findByIdAndUpdate(id, updateProductDto, {new: true});
  }

  async delete(id: string){
      return await this.productsModule.findByIdAndDelete(id);
  }
}
