
import { Locale } from '../locale/interface'

export interface ILocaleProviderProps{
    locale:Locale
}

export interface ILocaleReceiverProps<C extends keyof Locale=keyof Locale>{
    componentName?:C;
    defaultLocale?:Locale[C]|(()=>Locale[C]);
    children:(locale:Locale[C],localeCode?:string,fullLocale?:object)=>React.ReactElement;
}