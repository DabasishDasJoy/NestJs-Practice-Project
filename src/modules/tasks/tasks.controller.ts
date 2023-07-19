import { Controller } from '@nestjs/common';
import { FirstDec } from 'src/src/decorators/first.decorator';
import { SumDec } from 'src/src/decorators/sum.decorator';

@Controller('tasks')
@FirstDec // class decorator
export class TasksController {
    @SumDec
    func(num: number): number {
        return num;
    }
}

const ctrl = new TasksController();
console.log(ctrl.func(10));