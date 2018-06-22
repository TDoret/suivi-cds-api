import {ApiModelProperty} from '@nestjs/swagger';
import {IsInt, IsString} from 'class-validator';

export class CreateTaskModeDto {
    @ApiModelProperty({type: String})
    @IsString()
    readonly name;

    @ApiModelProperty({type: Number})
    @IsInt()
    readonly ratio;
}