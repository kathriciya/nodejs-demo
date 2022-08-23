import { injectable, inject } from 'inversify';
import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';
import { HTTPError } from '../errors/http-error.class';

@injectable()
export class UserController extends BaseController {
  constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
    super(loggerService);
    this.bindRoutes([
      { path: '/register', method: 'post', func: this.register },
      { path: '/login', method: 'post', func: this.login },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HTTPError(401, 'ошибка авторизации', 'login'));
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'register');
  }
}
