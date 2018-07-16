import controller from './tools/controller'
import * as api from './tools/api.js';

export default class extends controller {

    renders() {
        this.router.get('/', async (ctx, next) => {
            ctx.body = { code: 0 };
        });
    }

    actions() {
    }
}
 