const path = require('path')

module.exports = {
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
  localePath: path.resolve('./public/locales')
}