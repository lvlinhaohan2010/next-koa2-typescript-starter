import * as Router from 'koa-router'

const base = new Router({
  prefix: '/api'
})

base
  .get('/', ctx => {
    ctx.body = {
      msg: 'api base ok'
    }
  })

export default base
