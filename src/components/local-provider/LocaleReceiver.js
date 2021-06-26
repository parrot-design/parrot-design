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
import { useCallback, useContext } from 'react';
import defaultLocaleData from './default';
import LocaleContext from './context';
var LocaleReceiver = function (props) {
    var _a = props.componentName, componentName = _a === void 0 ? 'global' : _a, defaultLocale = props.defaultLocale, children = props.children;
    var context = useContext(LocaleContext);
    var getLocale = useCallback(function () {
        var locale = defaultLocale || defaultLocaleData[componentName];
        var parrotLocale = context;
        var localeFromContext = componentName && parrotLocale ? parrotLocale[componentName] : {};
        return __assign(__assign({}, (locale instanceof Function ? locale() : locale)), (localeFromContext || {}));
    }, [componentName, defaultLocale, context]);
    var getLocaleCode = useCallback(function () {
        var parrotLocale = context;
        var localeCode = parrotLocale && parrotLocale.locale;
        if (parrotLocale && parrotLocale.exist && !localeCode) {
            return defaultLocaleData.locale;
        }
        return localeCode;
    }, [context]);
    return children(getLocale(), getLocaleCode(), context);
};
export default LocaleReceiver;
