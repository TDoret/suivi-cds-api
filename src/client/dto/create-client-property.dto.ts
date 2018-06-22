import {ApiModelProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class CreateClientPropertyDto {
    @ApiModelProperty({type: String})
    @IsString()
    readonly key;
    @ApiModelProperty({type: String})
    @IsString()
    readonly name;
    @ApiModelProperty({type: String})
    @IsString()
    readonly desc;
    @ApiModelProperty({type: String})
    @IsString()
    readonly value;
}