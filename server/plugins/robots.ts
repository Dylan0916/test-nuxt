const DISALLOW_PATH = ['/booking/', '/member/', '/orders/']
const DISALLOW_FILE = ['/*.svg$']

export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook('robots:config', async ctx => {
    ctx.groups[0].disallow.push(...DISALLOW_PATH, ...DISALLOW_FILE)
  })
})
