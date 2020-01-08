import mongoose from 'mongoose';
const Fish = mongoose.model('Fishes');

export class FishController {
    getAllFishes(req: any, res: any) {
        Fish.find({}, (err, task) => {
            if (err)
                res.send(err);
            res.json(task);
        });
    }

    getFish() { }

    updateFish() { }

    deleteFish() { }
}
