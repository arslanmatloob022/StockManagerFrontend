import { definePlugin } from '/@src/utils/plugins'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default definePlugin(({ router }) => {
  if (import.meta.env.SSR) {
    return
  }

  NProgress.configure({ showSpinner: false })
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
})
