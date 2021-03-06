/**
 * Quasar App Extension prompts script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/prompts-api
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:

  return [
    {
      name: 'name',
      type: 'string',
      required: true,
      message: 'Quasar CLI Extension name (without prefix)',
    },
    {
      name: 'preset',
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  ]

 */

module.exports = function () {
  return [
    {
      name: 'thousandsDelimeter',
      type: 'string',
      required: true,
      message: 'Thousands separator',
      default: ','
    },
    {
      name: 'currencySymbol',
      type: 'string',
      required: true,
      message: 'Currency symbol',
      default: '$'
    },
    {
      name: 'decimalDelimeter',
      type: 'string',
      required: true,
      message: 'Decimal separator',
      default: '.'
    },
    {
      name: 'momentLocale',
      type: 'string',
      required: true,
      message: 'Moment locale',
      default: 'en'
    }
  ]
}
