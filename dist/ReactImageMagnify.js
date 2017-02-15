'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageShape = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCursorPosition = require('react-cursor-position');

var _reactCursorPosition2 = _interopRequireDefault(_reactCursorPosition);

var _reactHoverObserver = require('react-hover-observer');

var _reactHoverObserver2 = _interopRequireDefault(_reactHoverObserver);

var _LensTop = require('./LensTop');

var _LensTop2 = _interopRequireDefault(_LensTop);

var _LensLeft = require('./LensLeft');

var _LensLeft2 = _interopRequireDefault(_LensLeft);

var _LensRight = require('./LensRight');

var _LensRight2 = _interopRequireDefault(_LensRight);

var _LensBottom = require('./LensBottom');

var _LensBottom2 = _interopRequireDefault(_LensBottom);

var _EnlargedImage = require('./EnlargedImage');

var _EnlargedImage2 = _interopRequireDefault(_EnlargedImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactImageMagnify = function ReactImageMagnify(_ref) {
    var className = _ref.className,
        enlargedImageContainerStyle = _ref.enlargedImageContainerStyle,
        enlargedImageClassName = _ref.enlargedImageClassName,
        enlargedImageStyle = _ref.enlargedImageStyle,
        fadeDurationInMs = _ref.fadeDurationInMs,
        hoverDelayInMs = _ref.hoverDelayInMs,
        hoverOffDelayInMs = _ref.hoverOffDelayInMs,
        imageClassName = _ref.imageClassName,
        imageStyle = _ref.imageStyle,
        largeImage = _ref.largeImage,
        lensStyle = _ref.lensStyle,
        smallImage = _ref.smallImage,
        style = _ref.style;


    var cursorOffset = {
        x: Math.round(smallImage.width / largeImage.width * smallImage.width / 2),
        y: Math.round(smallImage.height / largeImage.height * smallImage.height / 2)
    };
    var defaultLensStyle = { backgroundColor: 'rgba(0,0,0,.4)' };
    var compositLensStyle = Object.assign({}, defaultLensStyle, lensStyle);

    return _react2.default.createElement(
        _reactCursorPosition2.default,
        {
            className: className,
            style: Object.assign({
                width: smallImage.width + 'px',
                height: smallImage.height + 'px',
                cursor: 'crosshair',
                position: 'relative'
            }, style)
        },
        _react2.default.createElement(
            _reactHoverObserver2.default,
            {
                hoverDelayInMs: hoverDelayInMs,
                hoverOffDelayInMs: hoverOffDelayInMs,
                onMouseEnter: function onMouseEnter(_ref2) {
                    var setIsHovering = _ref2.setIsHovering;
                    return setIsHovering();
                },
                onMouseLeave: function onMouseLeave(_ref3) {
                    var unsetIsHovering = _ref3.unsetIsHovering;
                    return unsetIsHovering();
                },
                onMouseOver: function onMouseOver(_ref4) {
                    var e = _ref4.e,
                        unsetIsHovering = _ref4.unsetIsHovering;

                    if (e.target.getAttribute('data-hover') === 'false') {
                        unsetIsHovering();
                    }
                }
            },
            _react2.default.createElement('img', {
                src: smallImage.src,
                srcSet: smallImage.srcSet,
                alt: smallImage.alt,
                className: imageClassName,
                style: Object.assign({
                    width: smallImage.width + 'px',
                    height: smallImage.height + 'px'
                }, imageStyle)
            }),
            _react2.default.createElement(_LensTop2.default, {
                cursorOffset: cursorOffset,
                fadeDurationInMs: fadeDurationInMs,
                smallImage: smallImage,
                style: compositLensStyle
            }),
            _react2.default.createElement(_LensLeft2.default, {
                cursorOffset: cursorOffset,
                fadeDurationInMs: fadeDurationInMs,
                smallImage: smallImage,
                style: compositLensStyle
            }),
            _react2.default.createElement(_LensRight2.default, {
                cursorOffset: cursorOffset,
                fadeDurationInMs: fadeDurationInMs,
                smallImage: smallImage,
                style: compositLensStyle
            }),
            _react2.default.createElement(_LensBottom2.default, {
                cursorOffset: cursorOffset,
                fadeDurationInMs: fadeDurationInMs,
                smallImage: smallImage,
                style: compositLensStyle
            }),
            _react2.default.createElement(_EnlargedImage2.default, {
                containerStyle: enlargedImageContainerStyle,
                cursorOffset: cursorOffset,
                fadeDurationInMs: fadeDurationInMs,
                imageClassName: enlargedImageClassName,
                imageStyle: enlargedImageStyle,
                largeImage: largeImage,
                smallImage: smallImage
            })
        )
    );
};

var ImageShape = exports.ImageShape = _react.PropTypes.shape({
    alt: _react.PropTypes.string,
    src: _react.PropTypes.string.isRequired,
    srcSet: _react.PropTypes.string,
    width: _react.PropTypes.number.isRequired,
    height: _react.PropTypes.number.isRequired
});

ReactImageMagnify.propTypes = {
    className: _react.PropTypes.string,
    enlargedImageContainerStyle: _react.PropTypes.object,
    enlargedImageClassName: _react.PropTypes.string,
    enlargedImageStyle: _react.PropTypes.object,
    fadeDurationInMs: _react.PropTypes.number,
    hoverDelayInMs: _react.PropTypes.number,
    hoverOffDelayInMs: _react.PropTypes.number,
    imageClassName: _react.PropTypes.string,
    imageStyle: _react.PropTypes.object,
    largeImage: ImageShape,
    lensStyle: _react.PropTypes.object,
    smallImage: ImageShape,
    style: _react.PropTypes.object
};

ReactImageMagnify.defaultProps = {
    fadeDurationInMs: 300,
    hoverDelayInMs: 250,
    hoverOffDelayInMs: 150
};

exports.default = ReactImageMagnify;