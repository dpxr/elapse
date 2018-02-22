const logNormal = require('./normal')

module.exports = () =>  {
  return async (ctx, next) => {
    const start = Date.now()

    await next()

    const method = ctx.request.method
    const url = ctx.request.url
    logNormal(method, url, start)
  }
}
