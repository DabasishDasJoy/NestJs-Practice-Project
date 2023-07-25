// import { Injectable, NestMiddleware } from "@nestjs/common";
// import { NextFunction } from "express";

import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void {
        console.log("...Response")
        next();
    }
}
