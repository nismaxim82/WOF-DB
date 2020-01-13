import express, { Request, Response } from 'express';
import { fishController } from "../../controllers";

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    fishController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    fishController.read(req, res);
});

router.get('/:name', (req: Request, res: Response) => {
    fishController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    fishController.update(req, res);
});

router.delete('/:name', (req: Request, res: Response) => {
    fishController.delete(req, res);
});
