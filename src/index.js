/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf (api, conf) {
  // make sure my-ext boot file is registered
  conf.boot.push('~quasar-app-extension-filters/src/boot/register-filters.js')
  if (!conf.build.env) {
    conf.build.env = {}
  }
  if (api.prompts.thousandsDelimeter) {
    conf.build.env['THOUSANDS_DELIMETER'] = `"${api.prompts.thousandsDelimeter}"`
  }
  if (api.prompts.currencySymbol) {
    conf.build.env['CURRENCY_SYMBOL'] = `"${api.prompts.currencySymbol}"`
  }
  if (api.prompts.decimalDelimeter) {
    conf.build.env['DECIMAL_DELIMETER'] = `"${api.prompts.decimalDelimeter}"`
  }
  if (api.prompts.momentLocale) {
    conf.build.env['MOMENT_LOCALE'] = `"${api.prompts.momentLocale}"`
  }
}

module.exports = function (api) {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^1.8.5')
  api.compatibleWith('@quasar/app', '^1.0.0  || >= 2')

  // Here we extend /quasar.conf.js, so we can add
  // a boot file which registers our new UI component;
  // "extendConf" will be defined below (keep reading the tutorial)
  api.extendQuasarConf((conf) => {
    extendConf(api, conf)
  })
}
