import { Locale } from "../locale/interface";

export type SizeType='small'|'middle'|'large'|undefined;

export interface ConfigConsumerProps{
    getPrefixCls:(suffixCls?:string,customizePrefixCls?:string)=>string;
    locale?:Locale;
}

export interface SizeContextProps {
    size?: SizeType;
}

export interface ConfigProviderProps{
    prefixCls?:string; 
    locale?:Locale;
    componentSize?:SizeType
}

export interface ProviderChildrenProps extends ConfigProviderProps{
    parentContext:ConfigConsumerProps
}