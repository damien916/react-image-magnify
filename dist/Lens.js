'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lens = function Lens(props) {
    var fadeDurationInMs = props.fadeDurationInMs,
        isHovering = props.isHovering,
        style = props.style,
        translateX = props.translateX,
        translateY = props.translateY;

    var translate = 'translate(' + translateX + 'px, ' + translateY + 'px)';
    var computedStyle = {
        position: 'absolute',
        transform: translate,
        WebkitTransform: translate,
        msTransform: translate,
        opacity: isHovering ? 1 : 0,
        transition: 'opacity ' + fadeDurationInMs + 'ms ease-in'
    };
    var defaultStyle = {
        width: 'auto',
        height: 'auto',
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
        display: 'block'
    };

    return _react2.default.createElement('div', { style: Object.assign({}, defaultStyle, style, computedStyle) });
};

Lens.propTypes = {
    style: _react.PropTypes.object,
    fadeDurationInMs: _react.PropTypes.number,
    isHovering: _react.PropTypes.bool,
    translateX: _react.PropTypes.number,
    translateY: _react.PropTypes.number,
    userStyle: _react.PropTypes.object
};

Lens.defaultProps = {
    isHovering: false,
    fadeDurationInMs: 0,
    translateX: 0,
    translateY: 0
};

exports.default = Lens;