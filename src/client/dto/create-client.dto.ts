import {ApiModelProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class CreateClientDto {
    @ApiModelProperty({type: String})
    @IsString()
    readonly name;
}