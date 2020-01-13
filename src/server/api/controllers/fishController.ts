import Fish from '../models/fishModel';
import { CrudController } from './crudController';

export class FishController extends CrudController {
    public create(req: import("express").Request<import("express-serve-static-core").ParamsDictionary>, res: import("express").Response): void {
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

    public read(req: import("express").Request<import("express-serve-static-core").ParamsDictionary>, res: import("express").Response): void {
        const params = {
            name: req.params.name
        };
        Fish.find(params, (err, result) => {
            if (err)
                res.send(err);
            else
                res.json(result);
        });
    }

    public update(req: import("express").Request<import("express-serve-static-core").ParamsDictionary>, res: import("express").Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: import("express").Request<import("express-serve-static-core").ParamsDictionary>, res: import("express").Response): void {
        throw new Error("Method not implemented.");
    }
}
