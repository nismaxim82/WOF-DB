import { FishController } from '../controllers/fishController';

export class FishRoutes {
    constructor(app: any) {
        var fishesList = new FishController();

        app.route('/fishes/:filter')
            .get(fishesList.getAllFishes);

        app.route('/fishes/get/:name')
            .get(fishesList.getFish);

        app.route('/fishes/add/:name')
            .put(fishesList.updateFish);

        app.route('/fishes/remove/:name')
            .put(fishesList.deleteFish);
    }
}
