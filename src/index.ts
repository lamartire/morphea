import { IStyles } from './types'

/**
 * Creates styles object from string
 * @example
 * createStylesFromString('display:block;') // { display: block; }
 * @param rules Styles string
 * @returns Styles object
 */
export function createStylesFromString(rules: string): IStyles {
  return rules
    .split(';')
    .filter(rule => !!rule)
    .reduce((acc, rule) => {
      const [key, value] = rule.split(':')

      return Object.assign(acc, {
        [key]: value
      })
    }, {})
}

/**
 * Creates styles object from template literal string, like css in styled-components
 * @example
 * css`
 *   display: block;
 *   width: 100px;
 *   height: ${200 / 2}px;
 * `
 * @param params Template strings array
 * @param props Template strings array properties
 * @returns Styles object Styles object
 */
export function css(
  params: TemplateStringsArray,
  ...props: Array<any>
): IStyles {
  const rules = params.reduce((acc, param, i) => {
    const rule = param.replace(/\s/g, '') /* ? */

    if (/\:$/.test(rule)) {
      return acc + rule + props[i]
    }

    return acc + rule
  }, '')

  return createStylesFromString(rules)
}
