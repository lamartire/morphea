"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
it('createStylesFromString – creates styles object from string', function () {
    expect(index_1.createStylesFromString('display:block;width:100px;')).toMatchSnapshot();
});
describe('css', function () {
    it('returns empty object', function () {
        expect(index_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])))).toMatchSnapshot();
    });
    it('creates styles object', function () {
        expect(index_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: block;\n      width: 100px;\n      color: #fff;\n      background: rgba(255, 255, 255, 0);\n    "], ["\n      display: block;\n      width: 100px;\n      color: #fff;\n      background: rgba(255, 255, 255, 0);\n    "])))).toMatchSnapshot();
    });
    it('creates styles with variables', function () {
        expect(index_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: ", ";\n      width: ", ";\n      color: ", ";\n      background: ", ";\n    "], ["\n      display: ", ";\n      width: ", ";\n      color: ", ";\n      background: ", ";\n    "])), 'block', '100px', '#fff', 'rgba(255,255,255,0)')).toMatchSnapshot();
    });
    it('merge other css in template literals', function () {
        expect(index_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      display: block;\n      width: ", "px;\n      height: 100px;\n      ", ";\n    "], ["\n      display: block;\n      width: ", "px;\n      height: 100px;\n      ",
            ";\n    "])), 100, index_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        color: #f00;\n      "], ["\n        color: #f00;\n      "]))))).toMatchSnapshot();
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=base.spec.js.map