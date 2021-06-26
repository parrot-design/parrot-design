import React from 'react';
import { ILocaleProviderProps } from './interface';
import LocaleContext from './context';

const LocaleProvider: React.FC<ILocaleProviderProps> = (props) => {

    const {
        locale = {},
        children
    } = props;

    return (
        <LocaleContext.Provider value={{ ...locale, exist: true }}>
            {children}
        </LocaleContext.Provider>
    )
}

export default LocaleProvider;