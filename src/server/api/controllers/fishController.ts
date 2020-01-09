import Fish from '../models/fishModel';

export class FishController {
    getAllFishes(req: any, res: any) {
        Fish.find({}, (err, result) => {
            if (err)
                res.send(err);
            else
                res.json(result);
        });
    }

    getFish(req: any, res: any) {
        Fish.init().then(() => {
            const new_fish = new Fish({
                name: 'ABC ' + Math.random()
            });
            new_fish.save((err, fish) => {
                if (err)
                    res.send(err);
                else
                    res.json(fish);
            });
        });
    }

    creatFish() { }

    updateFish(req: any, res: any) {
        console.log(req);
    }

    deleteFish() { }
}
