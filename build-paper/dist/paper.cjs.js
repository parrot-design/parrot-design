'use strict';

var React = require('react');
var classNames = require('@parrotjs/classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var hasValue = function (value) { return !!(value || value === 0); };

var InternalPaper = function (props, ref) {
    var _a;
    var _b = props.component, PaperRoot = _b === void 0 ? 'div' : _b, _c = props.prefixCls, customizePrefixCls = _c === void 0 ? 'parrot' : _c, className = props.className, children = props.children, _d = props.elevation, elevation = _d === void 0 ? 1 : _d, _e = props.square, square = _e === void 0 ? false : _e, restProps = __rest(props, ["component", "prefixCls", "className", "children", "elevation", "square"]);
    var prefixCls = customizePrefixCls + '-Paper';
    return (React__default['default'].createElement(PaperRoot, __assign({}, restProps, { ref: ref, children: children, className: classNames__default['default'](className, prefixCls, (_a = {},
            _a[prefixCls + "-elevation" + elevation] = hasValue(elevation),
            _a[prefixCls + "-round"] = !square,
            _a)) })));
};
var Paper = React__default['default'].forwardRef(InternalPaper);

module.exports = Paper;
