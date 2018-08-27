(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.morphea = {})));
}(this, (function (exports) { 'use strict';

  /**
   * Creates styles object from string
   * @example
   * createStylesFromString('display:block;') // { display: block; }
   * @param rules Styles string
   * @returns Styles object
   */
  function createStylesFromString(rules) {
      return rules
          .split(';')
          .filter(function (rule) { return !!rule; })
          .reduce(function (acc, rule) {
          var _a;
          var _b = rule.split(':'), key = _b[0], value = _b[1];
          return Object.assign(acc, (_a = {},
              _a[key] = value,
              _a));
      }, {});
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
  function css(params) {
      var props = [];
      for (var _i = 1; _i < arguments.length; _i++) {
          props[_i - 1] = arguments[_i];
      }
      var rules = params.reduce(function (acc, param, i) {
          var rule = param.replace(/\s/g, ''); /* ? */
          if (/\:$/.test(rule)) {
              return acc + rule + props[i];
          }
          return acc + rule;
      }, '');
      return createStylesFromString(rules);
  }

  exports.createStylesFromString = createStylesFromString;
  exports.css = css;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
