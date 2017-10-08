import * as next from 'next'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import api_server from './api/server'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const dir = process.argv[2];
const app = next({ dev, dir })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const opt = {
    Koa,
    Router,
    port
  }

  const cb_router = (router)=>{
        router.get('/a', async ctx => {
          await app.render(ctx.req, ctx.res, '/about', ctx.query)
          ctx.respond = false
        })

        router.get('*', async ctx => {
          await handle(ctx.req, ctx.res)
          ctx.respond = false
        })

        return router
      }

  const cb_server = (server)=>{
        server.use(async (ctx, next) => {
          ctx.res.statusCode = 200
          await next()
        })

        return server
      }

  const server = api_server(opt,cb_server,cb_router)
})