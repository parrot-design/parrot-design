
import React from 'react';
import { ConfigConsumerProps } from './interface'

const defaultGetPrefixCls=(suffixCls?:string,customizePrefixCls?:string)=>{
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `parrot-${suffixCls}` : 'parrot';
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls
});

export const ConfigConsumer = ConfigContext.Consumer;