import React,{ useCallback,useContext } from 'react';
import defaultLocaleData from './default'; 
import LocaleContext from './context';
import { ILocaleReceiverProps } from './interface'; 

const LocaleReceiver:React.FC<ILocaleReceiverProps>=props=>{

    const {
        componentName='global',
        defaultLocale,
        children
    }=props;

    const context:any=useContext(LocaleContext);

    const getLocale=useCallback(
        () => {
            const locale=defaultLocale || defaultLocaleData[componentName];
            const parrotLocale=context;
            const localeFromContext= componentName && parrotLocale ? parrotLocale[componentName] : {};
            return {
                ...(locale instanceof Function ? locale() : locale),
                ...(localeFromContext||{})
            }
        },
        [componentName,defaultLocale,context]
    )

    const getLocaleCode=useCallback(
        () => {
            const parrotLocale=context;
            const localeCode = parrotLocale && parrotLocale.locale;
            if (parrotLocale && parrotLocale.exist && !localeCode) {
                return defaultLocaleData.locale;
            }
            return localeCode;
        },
        [context],
    )

    return children(getLocale(),getLocaleCode(),context);
}

export default LocaleReceiver;