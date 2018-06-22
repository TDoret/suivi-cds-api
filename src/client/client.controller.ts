import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {IClient} from './interfaces/client.interface';
import {UnauthorizedResponseDto} from '../auth/dto/unauthorized-response.dto';
import {CreateClientDto} from './dto/create-client.dto';
import {Query} from '@nestjs/common/utils/decorators/route-params.decorator';
import {CreateClientPropertyDto} from './dto/create-client-property.dto';

@ApiUseTags('Client')
@Controller('client')
export class ClientController {
    constructor() {}

    @Get()
    // @ApiBearerAuth()
    @ApiOperation({title: 'Get clients', description: 'Get all client from the db. \nReturns an empty array if no client was found'})
    @ApiResponse({status: 200, description: 'List of clients successfully retrieved'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<IClient[]> {
        return null;
    }

    @Get(':id')
    // @ApiBearerAuth()
    @ApiOperation({title: 'Get client by ID', description: 'Get corresponding client from the db based on its ObjectID.\nReturns a 404 exception if no client was found'})
    @ApiResponse({status: 200, description: 'Client successfully retrieved'})
    @ApiResponse({status: 400, description: 'Bad parameter provided.'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @ApiResponse({status: 404, description: 'Resource not found'})
    @HttpCode(HttpStatus.OK)
    async findById(@Param('id') id: string): Promise<IClient> {
        return null;
    }

    @Post()
    @ApiOperation({title: 'Create a client', description: 'Insert a client record in the db'})
    @ApiResponse({status: 200, description: 'The client has been successfully created.'})
    @ApiResponse({status: 400, description: 'Bad parameters provided.'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createClientDto: CreateClientDto): Promise<IClient> {
        return null;
    }

    @Put(':clientId')
    @ApiOperation({title: 'update a client', description: 'update a client record in the db'})
    @ApiResponse({status: 200, description: 'The client has been successfully updated.'})
    @ApiResponse({status: 400, description: 'Bad parameters provided.'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @HttpCode(HttpStatus.OK)
    async updateClient(@Body() createClientDto: CreateClientDto, @Param('clientId') clientId: string,): Promise<IClient> {
        return null;
    }

    @Post(':clientId')
    @ApiOperation({title: 'Create a client property', description: 'Insert a client property record in the db'})
    @ApiResponse({status: 200, description: 'The client proiperty has been successfully created.'})
    @ApiResponse({status: 400, description: 'Bad parameters provided.'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @HttpCode(HttpStatus.CREATED)
    async createProperty(@Body() createClientDto: CreateClientPropertyDto[], @Param('clientId') clientId: string): Promise<IClient> {
        return null;
    }

    @Delete(':clientId')
    @ApiOperation({title: 'deactivate a client property', description: 'deactivate a client property'})
    @ApiResponse({status: 200, description: 'The client property has been successfully deactivated.'})
    @ApiResponse({status: 400, description: 'Bad parameters provided.'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @HttpCode(HttpStatus.OK)
    async removeClient(@Param('clientId') clientId: string) {
        return null;
    }

    @Delete(':clientId/:key')
    @ApiOperation({title: 'delete a client property', description: 'delete a client property'})
    @ApiResponse({status: 200, description: 'The client property has been successfully deleted.'})
    @ApiResponse({status: 400, description: 'Bad parameters provided.'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @HttpCode(HttpStatus.OK)
    async removeClientProperty(@Param('clientId') clientId: string,  @Param('key') key: string) {
        return null;
    }
}