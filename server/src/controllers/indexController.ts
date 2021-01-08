import { Request, Response } from 'express';

class IndexController{
    public index (req : Request, res: Response){
        res.send('API de juegos esta en /api/games')
    }
}

export const indexController = new IndexController();
