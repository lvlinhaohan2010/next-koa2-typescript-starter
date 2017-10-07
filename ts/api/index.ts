import * as Koa from 'koa'
import * as Router from 'koa-router'
import api_server from './server'

const port = parseInt(process.env.PORT, 10) || 3000
const opt = {
  Koa,
  Router,
  port
}

const cb_router = (router)=>{
      router.get('/api/test', ctx => {
        ctx.body = {
          msg: 'api test ok'
        }
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
