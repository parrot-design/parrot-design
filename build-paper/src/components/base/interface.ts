import React from 'react';

export interface BaseComponentProps{
    prefixCls?:string;
    className?:string;
    children?: React.ReactNode;
    style?:React.CSSProperties;
}

export * from './type';