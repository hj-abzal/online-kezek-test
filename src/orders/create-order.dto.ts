import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty({example: 1, description: 'id of restaurant'})
    readonly restaurant_id: number;
}
