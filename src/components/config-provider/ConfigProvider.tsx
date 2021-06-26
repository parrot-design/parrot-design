import React from 'react';
import { ConfigProviderProps, ProviderChildrenProps } from './interface';
import { ConfigConsumer, ConfigContext } from './context';
import { useBetterMemo } from '../../hooks';
import LocaleReceiver from '../local-provider/LocaleReceiver';

const ProviderChildren: React.FC<ProviderChildrenProps> = props => {

    const {
        parentContext,
        prefixCls,
        children
    }=props;

    const getPrefixCls=React.useCallback(
        (suffixCls?: string, customizePrefixCls?: string)=>{
            if(customizePrefixCls) return customizePrefixCls;
            const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
            return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
        },
        [parentContext, prefixCls],
    )

    const config={
        ...parentContext,
        getPrefixCls
    }

    const memoedConfig=useBetterMemo(
        () => config,
        config,
        (prevConfig:Record<string, any>,currentConfig)=>{
            const prevKeys = Object.keys(prevConfig);
            const currentKeys = Object.keys(currentConfig);
            return (
                prevKeys.length !== currentKeys.length ||
                prevKeys.some(key => prevConfig[key] !== currentConfig[key])
            );
        }
    )

    let childNode = children;

    return (
        <ConfigContext.Provider value={memoedConfig}>
            {childNode}
        </ConfigContext.Provider>
    );
}
 

const ConfigProvider: React.FC<ConfigProviderProps> = props => {
    return (
        <LocaleReceiver>
            {(_, __, legacyLocale) => (
                <ConfigConsumer>
                    {context => (
                        <ProviderChildren
                            parentContext={context} 
                            {...props}
                        />
                    )}
                </ConfigConsumer>
            )}
        </LocaleReceiver>
    )
}

export default ConfigProvider;