import { ApiProperty } from '@nestjs/swagger';
export class EventCategoriesDto{
    // it is the name of it
    @ApiProperty()
    category_name:string;

}