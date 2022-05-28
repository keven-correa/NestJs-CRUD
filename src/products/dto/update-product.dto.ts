import { IsNotEmpty, IsNumber, Length } from "class-validator";

export class UpdateProductDto{
    @IsNotEmpty()
    @Length(1, 255)
    name: string;

    @IsNumber()
    price: number;

    @IsNotEmpty()
    description: string
}