import { BaseComponentProps } from '../base/interface';
declare const ElevationLevels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
export declare type ElevationLevel = typeof ElevationLevels[number];
export interface IPaperProps extends BaseComponentProps {
    component?: any;
    elevation?: ElevationLevel;
    square?: boolean;
}
export {};
