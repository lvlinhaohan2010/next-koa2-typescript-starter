import * as bodyparser from 'koa-bodyparser'
import * as compress from 'koa-compress'
import * as convert from 'koa-convert'
import * as cors from 'koa-cors'
import * as logger from 'koa-logger'

import baseApi from './router/base'

export default (opt,cb_server,cb_router) => {
  const server = cb_server(new opt.Koa())
  const router = cb_router(new opt.Router())

  server.use(async (ctx, next) => {
    try {
      await next()
      ctx.body = {
        status: 0,
        data: ctx.body
      }
    } catch (e) {
      ctx.status = e.status || 1
      ctx.body = {
        status: e.status || 1,
        message: e.message,
        data: {}
      }
    }
  })
  
  server.use(compress({ threshold: 2048}));

  server.use(convert(cors()))
  
  server.use(bodyparser())
  
  server.use(convert(logger()))
  
  //add api routes first
  server.use(baseApi.routes())

  server.use(router.routes())
  const port = opt.port
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
  return server
}