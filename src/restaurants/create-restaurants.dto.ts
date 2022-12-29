import { ApiProperty } from "@nestjs/swagger";

export class CreateRestaurantsDto {
    @ApiProperty({example: "Burger king", description: 'title of restaurant'})
    readonly title: string;

    @ApiProperty({example: "https//", description: 'img of restaurant'})
    readonly img: string;

    @ApiProperty({example: "burger-king", description: 'url of restaurant'})
    readonly url: string;
}
