import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import Router from 'koa-router';
import fs from 'fs';
import mongoose from 'mongoose';
import mongooseModules from './modules/modules.js'

async function start () {
    const app = new Koa()
    const host = process.env.HOST || '127.0.0.1'
    const port = process.env.PORT || 3000
    
    //数据库配置
    const mongoOptions = {
        user: 'gaoyu',
        pass: 'gjy321456',
        useNewUrlParser: true
    };
    mongoose.connect(`mongodb://127.0.0.1:27017/gaoyublog`, mongoOptions); // 数据库链接
    const db = mongoose.connection;
    const DBModule = new mongooseModules(mongoose);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('openUri', function (callback) {
        console.log("db opened")
    });

    const router = Router({
        prefix: '/api'
    });
    //导入路由
    const addRouters = (path) => {
        var files = fs.readdirSync(path);
        var js_files = files.filter((f) => {
            return f.endsWith('.js');
        }, files);
        js_files.forEach(name => {
            (new (require(`${__dirname}/routes/${name}`).default)(router, DBModule, app)).init();
        });
    }
    addRouters(__dirname + '/routes');
    app.use(router.routes(), router.allowedMethods());



    // Import and Set Nuxt.js options
    let config = require('../nuxt.config.js')
    config.dev = !(app.env === 'production')

    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    app.use(async (ctx, next) => {
        await next()
        ctx.status = 200 // koa defaults to 404 when it sees that status is unset
        return new Promise((resolve, reject) => {
            ctx.res.on('close', resolve)
            ctx.res.on('finish', resolve)
            nuxt.render(ctx.req, ctx.res, promise => {
                // nuxt.render passes a rejected promise into callback on error.
                promise.then(resolve).catch(reject)
            })
        })
    })

    app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
