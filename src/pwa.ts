// @ts-ignore
import { registerSW } from 'virtual:pwa-register'

window.addEventListener('load', () => {
  const pwaToast = document.querySelector<HTMLDivElement>('#pwa-toast')!
  const pwaToastMessage = pwaToast.querySelector<HTMLDivElement>(
    '.message #toast-message'
  )!
  const pwaCloseBtn = pwaToast.querySelector<HTMLButtonElement>('#pwa-close')!
  const pwaRefreshBtn =
    pwaToast.querySelector<HTMLButtonElement>('#pwa-refresh')!

  // eslint-disable-next-line no-unused-vars
  let refreshSW: ((reloadPage?: boolean) => Promise<void>) | undefined

  const refreshCallback = () => refreshSW?.(true)

  const hidePwaToast = (raf = false) => {
    if (raf) {
      requestAnimationFrame(() => hidePwaToast(false))
      return
    }
    if (pwaToast.classList.contains('refresh'))
      pwaRefreshBtn.removeEventListener('click', refreshCallback)

    pwaToast.classList.remove('show', 'refresh')
  }
  const showPwaToast = (offline: boolean) => {
    if (!offline) pwaRefreshBtn.addEventListener('click', refreshCallback)
    requestAnimationFrame(() => {
      hidePwaToast(false)
      if (!offline) pwaToast.classList.add('refresh')
      pwaToast.classList.add('show')
      // after 3.14 seconds hide the toast
      setTimeout(hidePwaToast, 3140)
    })
  }

  pwaCloseBtn.addEventListener('click', () => hidePwaToast(true))

  refreshSW = registerSW({
    immediate: true,
    onOfflineReady() {
      pwaToastMessage.innerHTML = 'App ready to work offline'
      showPwaToast(true)
    },
    onNeedRefresh() {
      pwaToastMessage.innerHTML =
        'New content available, click on reload button to update'
      showPwaToast(false)
    },
    onRegisteredSW(swScriptUrl: any) {
      console.log('SW registered: ', swScriptUrl)
    }
  })
})