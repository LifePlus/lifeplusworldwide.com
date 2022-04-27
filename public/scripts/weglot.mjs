const setHtmlDir = () => {
  const dir = Weglot.getCurrentLang() === 'ar'
    ? 'rtl'
    : 'ltr'

  document.documentElement.setAttribute('dir', dir)
}

Weglot.on('initialized', function () {
  setHtmlDir()
})

Weglot.on('languageChanged', () => {
  setHtmlDir()
})

Weglot.initialize({
  api_key: 'wg_4d02ce0db1d55a95c986f226bff984019',
  hide_switcher: true,
  cache: true,
})
