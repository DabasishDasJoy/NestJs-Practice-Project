import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class Logger implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void {
        console.log("...Response")
    }
}
