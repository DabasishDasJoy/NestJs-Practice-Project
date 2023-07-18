import { Logger } from "@nestjs/common";

export function FirstDec<T extends { new(...args: any[]) }>(constructor: T): T {
    console.log("first call")
    return class extends constructor {
        private logger = new Logger(constructor.name);
        sayhello(): void {
            this.logger.log("Hello from custom decorator");
            super.sayhello();
        }
    }
}