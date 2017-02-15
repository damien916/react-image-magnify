'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageShape = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTouchPosition = require('react-touch-position');

var _reactTouchPosition2 = _interopRequireDefault(_reactTouchPosition);

var _EnlargedImage = require('./EnlargedImage');

var _EnlargedImage2 = _interopRequireDefault(_EnlargedImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactImageMagnifyTouch = function ReactImageMagnifyTouch(_ref) {
    var className = _ref.className,
        enlargedImageContainerStyle = _ref.enlargedImageContainerStyle,
        enlargedImageClassName = _ref.enlargedImageClassName,
        enlargedImageStyle = _ref.enlargedImageStyle,
        fadeDurationInMs = _ref.fadeDurationInMs,
        isActivatedOnTouch = _ref.isActivatedOnTouch,
        imageClassName = _ref.imageClassName,
        imageStyle = _ref.imageStyle,
        largeImage = _ref.largeImage,
        pressDuration = _ref.pressDuration,
        pressMoveThreshold = _ref.pressMoveThreshold,
        smallImage = _ref.smallImage,
        style = _ref.style;


    var cursorOffset = {
        x: Math.round(smallImage.width / largeImage.width * smallImage.width / 2),
        y: Math.round(smallImage.height / largeImage.height * smallImage.height / 2)
    };

    return _react2.default.createElement(
        _reactTouchPosition2.default,
        {
            className: className,
            isActivatedOnTouch: isActivatedOnTouch,
            mapPropNames: function mapPropNames(_ref2) {
                var isActive = _ref2.isActive,
                    isTouchOutside = _ref2.isTouchOutside,
                    touchPosition = _ref2.touchPosition;
                return {
                    isHovering: isActive,
                    isTouchOutside: isTouchOutside,
                    cursorPosition: touchPosition
                };
            },
            pressDuration: pressDuration,
            pressMoveThreshold: pressMoveThreshold,
            style: Object.assign({
                width: smallImage.width + 'px',
                height: smallImage.height + 'px',
                position: 'relative'
            }, style)
        },
        _react2.default.createElement('img', {
            src: smallImage.src,
            alt: smallImage.alt,
            className: imageClassName,
            style: Object.assign({
                width: smallImage.width + 'px',
                height: smallImage.height + 'px',
                pointerEvents: 'none'
            }, imageStyle)
        }),
        _react2.default.createElement(_EnlargedImage2.default, {
            containerStyle: enlargedImageContainerStyle,
            cursorOffset: cursorOffset,
            fadeDurationInMs: fadeDurationInMs,
            imageClassName: enlargedImageClassName,
            imageStyle: Object.assign({}, enlargedImageStyle, { pointerEvents: 'none' }),
            isRenderOnDemand: false,
            largeImage: largeImage,
            smallImage: smallImage
        })
    );
};

var ImageShape = exports.ImageShape = _react.PropTypes.shape({
    alt: _react.PropTypes.string,
    src: _react.PropTypes.string.isRequired,
    srcSet: _react.PropTypes.string,
    width: _react.PropTypes.number.isRequired,
    height: _react.PropTypes.number.isRequired
});

ReactImageMagnifyTouch.propTypes = {
    className: _react.PropTypes.string,
    enlargedImageContainerStyle: _react.PropTypes.object,
    enlargedImageClassName: _react.PropTypes.string,
    enlargedImageStyle: _react.PropTypes.object,
    fadeDurationInMs: _react.PropTypes.number,
    isActivatedOnTouch: _react.PropTypes.bool,
    imageClassName: _react.PropTypes.string,
    imageStyle: _react.PropTypes.object,
    largeImage: ImageShape,
    pressDuration: _react.PropTypes.number,
    pressMoveThreshold: _react.PropTypes.number,
    smallImage: ImageShape,
    style: _react.PropTypes.object
};

ReactImageMagnifyTouch.defaultProps = {
    fadeDurationInMs: 500
};

exports.default = ReactImageMagnifyTouch;