import { IStyles } from './types';
/**
 * Creates styles object from string
 * @example
 * createStylesFromString('display:block;') // { display: block; }
 * @param rules Styles string
 * @returns Styles object
 */
export declare function createStylesFromString(rules: string): IStyles;
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
export declare function css(params: TemplateStringsArray, ...props: Array<any>): IStyles;
