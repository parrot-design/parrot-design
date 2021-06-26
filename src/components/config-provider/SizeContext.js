import React from 'react';
var SizeContext = React.createContext(undefined);
export var SizeContextProvider = function (_a) {
    var children = _a.children, size = _a.size;
    return (React.createElement(SizeContext.Consumer, null, function (originSize) { return (React.createElement(SizeContext.Provider, { value: size || originSize }, children)); }));
};
export default SizeContext;
