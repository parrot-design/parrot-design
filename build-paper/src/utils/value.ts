
type hasValueType = number | string;

export const hasValue=(value:hasValueType)=>!!(value || value===0); 