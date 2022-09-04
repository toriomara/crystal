const path = require('path');

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'de', 'fr', 'ar', 'zh', 'es'],
  },
  //localePath: path.resolve('locale'),
};