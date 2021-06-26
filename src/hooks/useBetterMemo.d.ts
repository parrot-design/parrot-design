export default function useBetterMemo<Value, Condition = any[]>(getValue: () => Value, condition: Condition, shouldUpdate: (prev: Condition, next: Condition) => boolean): any;
