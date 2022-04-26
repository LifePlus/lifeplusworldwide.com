const setCurrentLanguage = () => {
  const currentLang = Weglot.getCurrentLang().toUpperCase()
  const dir = currentLang === 'AR' ? 'rtl' : 'ltr'

  document.documentElement.setAttribute('dir', dir)
  // Array.from(document.getElementsByClassName('carousel')).forEach(element => {
  //   element.setAttribute('dir', dir)
  // })
  Array.from(document.getElementsByClassName('current-lang')).forEach(element => {
    element.innerHTML = currentLang
  })
}
const setAvailableLanguages = () => {
  const currentLang = Weglot.getCurrentLang()
  const availableLanguages = Weglot.options.languages
    .map(lang => lang.language_to)
    .concat(Weglot.options.language_from)
    .sort()
    .map(code => {
      const name = Weglot.getLanguageName(code)

      return `<li>
  <a class="flex w-full px-4 py-1 ltr:border-l-4 rtl:border-r-4 transition ${code === currentLang ? 'border-black text-brand-primary' : 'border-white hover:border-black hover:text-brand-primary'}" href="#Weglot-${code}" rel="noreferrer">${name}</a>
</li>`
    })
    .join('')

  Array.from(document.getElementsByClassName('language-list')).forEach(list => {
    list.innerHTML = availableLanguages
  })
}

Weglot.on('initialized', function () {
  setCurrentLanguage()
  setAvailableLanguages()
})

Weglot.on('languageChanged', () => {
  setCurrentLanguage()
  setAvailableLanguages()
})

Weglot.initialize({
  api_key: 'wg_4d02ce0db1d55a95c986f226bff984019'
})
