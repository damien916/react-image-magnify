'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.clamp');

var _lodash2 = _interopRequireDefault(_lodash);

var _Lens = require('./Lens');

var _Lens2 = _interopRequireDefault(_Lens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LensBottom = function LensBottom(_ref) {
    var cursorOffset = _ref.cursorOffset,
        cursorPosition = _ref.cursorPosition,
        fadeDurationInMs = _ref.fadeDurationInMs,
        isHovering = _ref.isHovering,
        smallImage = _ref.smallImage,
        style = _ref.style;


    var maxHeight = smallImage.height - cursorOffset.y * 2;
    var height = (0, _lodash2.default)(smallImage.height - cursorPosition.y - cursorOffset.y, 0, maxHeight);
    var computedStyle = {
        height: height + 'px',
        width: '100%',
        bottom: '0px'
    };

    return _react2.default.createElement(_Lens2.default, {
        fadeDurationInMs: fadeDurationInMs,
        isHovering: isHovering,
        style: Object.assign({}, style, computedStyle)
    });
};

exports.default = LensBottom;