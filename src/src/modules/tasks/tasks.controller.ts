import { Controller } from '@nestjs/common';
import { FirstDec } from 'src/src/decorators/first.decorator';

@Controller('tasks')
@FirstDec // class decorator
export class TasksController {

}
