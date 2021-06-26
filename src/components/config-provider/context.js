import React from 'react';
var defaultGetPrefixCls = function (suffixCls, customizePrefixCls) {
    if (customizePrefixCls)
        return customizePrefixCls;
    return suffixCls ? "parrot-" + suffixCls : 'parrot';
};
export var ConfigContext = React.createContext({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls
});
export var ConfigConsumer = ConfigContext.Consumer;
