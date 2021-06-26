import React from 'react';
import { IPaperProps } from './interface';
import './index.scss';
interface CompoundedComponent extends React.ForwardRefExoticComponent<IPaperProps & React.RefAttributes<HTMLElement>> {
}
declare const Paper: CompoundedComponent;
export default Paper;
