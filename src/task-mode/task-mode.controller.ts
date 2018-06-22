import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {UnauthorizedResponseDto} from '../auth/dto/unauthorized-response.dto';
import {ITaskMode} from './interfaces/task-mode.interface';
import {CreateTaskModeDto} from './dto/create-task-mode.dto';

@ApiUseTags('Task mode')
@Controller('taskMode')
export class TaskModeController {
    constructor() {}

    @Get()
    // @ApiBearerAuth()
    @ApiOperation({title: 'Get task modes', description: 'Get all task from the db. \nReturns an empty array if no task mode was found'})
    @ApiResponse({status: 200, description: 'List of clients successfully retrieved'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<ITaskMode[]> {
        return null;
    }

    @Get(':id')
    // @ApiBearerAuth()
    @ApiOperation({title: 'Get task mode by ID', description: 'Get corresponding task mode from the db based on its ObjectID.\nReturns a 404 exception if no client was found'})
    @ApiResponse({status: 200, description: 'task mode successfully retrieved'})
    @ApiResponse({status: 400, description: 'Bad parameter provided.'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @ApiResponse({status: 404, description: 'Resource not found'})
    @HttpCode(HttpStatus.OK)
    async findById(@Param('id') id: string): Promise<ITaskMode> {
        return null;
    }

    @Post()
    @ApiOperation({title: 'Create a task mode', description: 'Insert a task mode record in the db'})
    @ApiResponse({status: 200, description: 'The task mode has been successfully created.'})
    @ApiResponse({status: 400, description: 'Bad parameters provided.'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createTaskModeDto: CreateTaskModeDto): Promise<ITaskMode> {
        return null;
    }

    @Put(':taskModeId')
    @ApiOperation({title: 'update a task mode', description: 'update a task mode record in the db'})
    @ApiResponse({status: 200, description: 'The task mode has been successfully updated.'})
    @ApiResponse({status: 400, description: 'Bad parameters provided.'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @HttpCode(HttpStatus.OK)
    async updateClient(@Body() createTaskModeDto: CreateTaskModeDto, @Param('taskModeId') taskModeId: string): Promise<ITaskMode> {
        return null;
    }

    @Delete(':taskModeId')
    @ApiOperation({title: 'deactivate a task mode property', description: 'deactivate a task mode property'})
    @ApiResponse({status: 200, description: 'The task mode property has been successfully deactivated.'})
    @ApiResponse({status: 400, description: 'Bad parameters provided.'})
    @ApiResponse({status: 401, description: 'Unauthorized.', type: UnauthorizedResponseDto})
    @HttpCode(HttpStatus.OK)
    async removeClient(@Param('taskModeId') taskModeId: string) {
        return null;
    }
}