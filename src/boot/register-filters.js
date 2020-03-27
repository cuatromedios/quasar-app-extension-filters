import _ from '../vendor/lodash.custom'
import numeral from 'numeral'
import moment from 'moment'

export default ({ Vue }) => {
  Vue.filter('camelCase', function (value) {
    return _.camelCase(value)
  })
  Vue.filter('capitalize', function (value) {
    return _.capitalize(value)
  })
  Vue.filter('deburr', function (value) {
    return _.deburr(value)
  })
  Vue.filter('kebabCase', function (value) {
    return _.kebabCase(value)
  })
  Vue.filter('lowerCase', function (value) {
    return _.lowerCase(value)
  })
  Vue.filter('lowerFirst', function (value) {
    return _.lowerFirst(value)
  })
  Vue.filter('padEnd', function (value, length, fillString) {
    return _.padEnd(value, length, fillString)
  })
  Vue.filter('padStart', function (value, length, fillString) {
    return _.padStart(value, length, fillString)
  })
  Vue.filter('repeat', function (value, quantity) {
    return _.repeat(value, quantity)
  })
  Vue.filter('snakeCase', function (value) {
    return _.snakeCase(value)
  })
  Vue.filter('startCase', function (value) {
    return _.startCase(value)
  })
  Vue.filter('toLower', function (value) {
    return _.toLower(value)
  })
  Vue.filter('toUpper', function (value) {
    return _.toUpper(value)
  })
  Vue.filter('trim', function (value, chars) {
    return _.trim(value, chars)
  })
  Vue.filter('trimEnd', function (value, chars) {
    return _.trimEnd(value, chars)
  })
  Vue.filter('trimStart', function (value, chars) {
    return _.trimStart(value, chars)
  })
  Vue.filter('truncate', function (value, options) {
    return _.truncate(value, options)
  })
  Vue.filter('upperCase', function (value) {
    return _.upperCase(value)
  })
  Vue.filter('upperFirst', function (value) {
    return _.upperFirst(value)
  })

  numeral.register('locale', 'nq', {
    delimiters: {
      thousands: process.env.THOUSANDS_DELIMETER,
      decimal: process.env.DECIMAL_DELIMETER
    },
    abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
    },
    ordinal : function (number) {
      return number === 1 ? 'º' : 'º';
    },
    currency: {
      symbol: process.env.CURRENCY_SYMBOL
    }
  })
  numeral.locale('nq')
  // Numerals
  Vue.filter('currency', function (value) {
    return numeral(value).format('$0,0.00')
  })
  Vue.filter('percentage', function (value) {
    return numeral(value).format('0,0%')
  })
  Vue.filter('numeral', function (value, format) {
    return numeral(value).format(format)
  })

  moment.locale(process.env.MOMENT_LOCALE);
  Vue.filter('moment', function (value, format) {
    return moment(value).format(format)
  })
}
