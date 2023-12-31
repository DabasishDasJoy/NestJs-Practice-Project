import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './modules/tasks/tasks.controller';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [AppController, TasksController],
  providers: [AppService],
})
export class AppModule {}
