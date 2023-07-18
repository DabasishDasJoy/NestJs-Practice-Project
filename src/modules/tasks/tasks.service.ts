import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    constructor(
        private tasks = ["task1", "task2"],
    ) { }

    async getTasks() {
        const name = "task1";
        return this.tasks;
    }
} 
