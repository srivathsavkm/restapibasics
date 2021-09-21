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

const sampleRequest = (req: Request, res: Response, next: NextFunction) => {
    return String(req);
};

export default { serverHealthCheck, helloWorld, sampleRequest };
