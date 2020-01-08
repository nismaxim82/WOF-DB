import mongoose from 'mongoose';
import Fish from '../models/fishModel';

export class FishController {
    getAllFishes(req: any, res: any) {
        console.log('api getAllFishes');
        Fish.find({}, (err, result) => {
            if (err)
                res.send(err);
            console.log(err, result);
            res.json(result);
        });
    }

    getFish(req: any, res: any) {
        console.log(req.params);
        res.send('OK');
    }

    creatFish() { }

    updateFish(req: any, res: any) {
        console.log(req);
    }

    deleteFish() { }
}
