Quasar App Extension Filters
===

> A Quasar App Extension to expose common Vue filters, like currency, percentage
  , capitalize and other common numeric and text filters

## Install
```bash
quasar ext add filters
```
Quasar CLI will retrieve it from NPM and install the extension.

### Prompts

> Numeral thousands, and decimal delimeters, currency symbol and moment locale.

## Uninstall
```bash
quasar ext remove filters
```

# How to use
The extension will add common filters using a Quasar Boot file. Use them in your templates as common Vue filters, for example:

```vue
{{ theModel | camelCase }} {{ theModel | currency }}
```

### String filters
Provided by **Lodash** 
> Descriptions taken from https://lodash.com/docs/4.17.15 

| **filter**   | **parameters**| **description** |
|--------------|------------   | --- |
| `camelCase`   | _none_ | Converts string to camelCase.
| `capitalize`   | _none_ | Converts the first character of string to upper case and the remaining to lower case.
| `deburr`   | _none_ | Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.
| `kebabCase`   | _none_ | Converts string to kebab-case.
| `lowerCase`   | _none_ | Converts string, as space separated words, to lower case.
| `lowerFirst`   | _none_ | Converts the first character of string to lower case.
| `padEnd`   | length, fillString | Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.
| `padStart`   | length, fillString | Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.
| `repeat`   | quantity | Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.
| `snakeCase`   | _none_ | Converts string to snake_case
| `startCase`   | _none_ | Converts string to Start Case
| `toLower`   | _none_ | Converts string, as a whole, to lower case just like String#toLowerCase.
| `toUpper`   | _none_ | Converts string, as a whole, to upper case just like String#toUpperCase.
| `trim`   | characters | Removes leading and trailing whitespace or specified characters from string.
| `trimEnd`   | characters | Removes trailing whitespace or specified characters from string.
| `trimStart`   | characters | Removes leading whitespace or specified characters from string.
| `truncate`   | options={} | Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...". (info)[https://lodash.com/docs/4.17.15#truncate]
| `upperCase`   | _none_ | Converts string, as space separated words, to upper case.
| `upperFirst`   | _none_ | Converts the first character of string to upper case.

### Numeric filters
Provided by **NumeralJS** 
> More info https://numeraljs.com/ 

| **filter**   | **parameters**| **description** |
|--------------|------------   | --- |
| `currency`   | _none_ | Shows currency format.
| `percentage`   | _none_ | Shows as percentage format, for example 0.45 shows as 45%.
| `numeral`   | format | Use any NumeralJS format.

### Date filters
Provided by **MomentJS** 
> More info https://momentjs.com/ 

| **filter**   | **parameters**| **description** |
|--------------|------------   | --- |
| `moment`   | format | Use any MomentJS format.

### Demo
https://cuatromedios.github.io/quasar-app-extension-nequ-components/#/filters
