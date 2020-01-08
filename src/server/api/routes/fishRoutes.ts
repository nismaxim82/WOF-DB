import { FishController } from '../controllers/fishController';

export class FishRoutes {
    constructor(app: any) {
        var fishesList = new FishController();

        app.route('/fishes')
            .get(fishesList.getAllFishes)
            .post(fishesList.creatFish);

        app.route('/fishes/:name')
            .get(fishesList.getFish)
            .put(fishesList.updateFish)
            .delete(fishesList.deleteFish);
    }
}
