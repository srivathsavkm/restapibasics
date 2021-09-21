import { NextFunction, Request, Response } from 'express';

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'pong'
    });
};

const helloWorld = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'Hello World!!!'
    });
};

export default { serverHealthCheck, helloWorld };
