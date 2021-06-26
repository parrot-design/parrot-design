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
import { ConfigConsumer, ConfigContext } from './context';
import { useBetterMemo } from '../../hooks';
import LocaleReceiver from '../local-provider/LocaleReceiver';
var ProviderChildren = function (props) {
    var parentContext = props.parentContext, prefixCls = props.prefixCls, children = props.children;
    var getPrefixCls = React.useCallback(function (suffixCls, customizePrefixCls) {
        if (customizePrefixCls)
            return customizePrefixCls;
        var mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
        return suffixCls ? mergedPrefixCls + "-" + suffixCls : mergedPrefixCls;
    }, [parentContext, prefixCls]);
    var config = __assign(__assign({}, parentContext), { getPrefixCls: getPrefixCls });
    var memoedConfig = useBetterMemo(function () { return config; }, config, function (prevConfig, currentConfig) {
        var prevKeys = Object.keys(prevConfig);
        var currentKeys = Object.keys(currentConfig);
        return (prevKeys.length !== currentKeys.length ||
            prevKeys.some(function (key) { return prevConfig[key] !== currentConfig[key]; }));
    });
    var childNode = children;
    return (React.createElement(ConfigContext.Provider, { value: memoedConfig }, childNode));
};
var ConfigProvider = function (props) {
    return (React.createElement(LocaleReceiver, null, function (_, __, legacyLocale) { return (React.createElement(ConfigConsumer, null, function (context) { return (React.createElement(ProviderChildren, __assign({ parentContext: context }, props))); })); }));
};
export default ConfigProvider;
