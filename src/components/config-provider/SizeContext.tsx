import React from 'react';

import { SizeType,SizeContextProps } from './interface'

const SizeContext=React.createContext<SizeType>(undefined);

export const SizeContextProvider:React.FC<SizeContextProps>=({children,size})=>(
    <SizeContext.Consumer>
        {
            originSize=>(
                <SizeContext.Provider value={size || originSize}>
                    {children}
                </SizeContext.Provider>
            )
        }
    </SizeContext.Consumer>
)

export default SizeContext;