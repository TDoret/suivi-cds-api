import {ApiModelProperty} from '@nestjs/swagger';

export class UnauthorizedResponseDto {
    @ApiModelProperty({type: Number, isArray: false})
    readonly statusCode: string;

    @ApiModelProperty({type: String, isArray: false})
    readonly error: string;

    @ApiModelProperty({type: String, isArray: false})
    readonly message: string;
}