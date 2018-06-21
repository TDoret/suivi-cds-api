import {Get, Controller, Res} from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    root(@Res() res): any {
        res.redirect('/docs');
    }
}
