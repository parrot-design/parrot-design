var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import LocaleContext from './context';
var LocaleProvider = function (props) {
    var _a = props.locale, locale = _a === void 0 ? {} : _a, children = props.children;
    return (React.createElement(LocaleContext.Provider, { value: __assign(__assign({}, locale), { exist: true }) }, children));
};
export default LocaleProvider;
