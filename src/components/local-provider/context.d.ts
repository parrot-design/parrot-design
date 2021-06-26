/// <reference types="react" />
import { Locale } from '../locale/interface';
declare const LocaleContext: import("react").Context<Partial<Locale> & {
    exist?: boolean;
}>;
export default LocaleContext;
