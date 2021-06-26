import React from 'react';
import { IPaperProps } from './interface';
import classNames from '@parrotjs/classnames'; 
import { hasValue } from '../../utils/value'
import './index.scss';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<IPaperProps & React.RefAttributes<HTMLElement>> {
  
}

const InternalPaper:React.ForwardRefRenderFunction<unknown, IPaperProps>=(props,ref)=>{

    const {
        component:PaperRoot='div',
        prefixCls:customizePrefixCls='parrot',
        className,
        children,
        elevation=1,
        square=false,
        ...restProps
    }=props; 

    const prefixCls=customizePrefixCls+'-Paper'

    return (
        <PaperRoot
            {...restProps} 
            ref={ref}
            children={children}
            className={
                classNames( 
                    className,
                    prefixCls,
                    {
                        [`${prefixCls}-elevation${elevation}`]:hasValue(elevation),
                        [`${prefixCls}-round`]:!square
                    }
                )
            }
        />
    )
}

const Paper=React.forwardRef<unknown, IPaperProps>(InternalPaper) as CompoundedComponent;

export default Paper;   