'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageShape = exports.Point = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.clamp');

var _lodash2 = _interopRequireDefault(_lodash);

var _ReactImageMagnify = require('./ReactImageMagnify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Point = exports.Point = _react.PropTypes.shape({
    x: _react.PropTypes.number.isRequired,
    y: _react.PropTypes.number.isRequired
});

var ImageShape = exports.ImageShape = _react.PropTypes.shape({
    alt: _react.PropTypes.string,
    src: _react.PropTypes.string.isRequired,
    srcSet: _react.PropTypes.string,
    width: _react.PropTypes.number.isRequired,
    height: _react.PropTypes.number.isRequired
});

exports.default = _react2.default.createClass({

    displayName: 'EnlargedImage',

    getInitialState: function getInitialState() {
        return {
            isTransitionEntering: false,
            isTransitionActive: false,
            isTransitionLeaving: false,
            isTransitionDone: false
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            fadeDurationInMs: 0,
            isRenderOnDemand: true
        };
    },


    propTypes: {
        containerClassName: _react.PropTypes.string,
        containerStyle: _react.PropTypes.object,
        cursorOffset: Point,
        cursorPosition: Point,
        fadeDurationInMs: _react.PropTypes.number,
        imageClassName: _react.PropTypes.string,
        imageStyle: _react.PropTypes.object,
        isHovering: _react.PropTypes.bool,
        isRenderOnDemand: _react.PropTypes.bool,
        largeImage: ImageShape,
        smallImage: ImageShape
    },

    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var _this = this;

        var isHovering = nextProps.isHovering;


        if (isHovering === this.props.isHovering) {
            return;
        }

        if (isHovering) {
            this.setState({
                isTransitionEntering: true
            });

            setTimeout(function () {
                _this.setState({
                    isTransitionEntering: false,
                    isTransitionActive: true
                });
            }, 0);
        } else {
            this.setState({
                isTransitionActive: false,
                isTransitionLeaving: true
            });

            setTimeout(function () {
                _this.setState({
                    isTransitionLeaving: false
                });
            }, this.props.fadeDurationInMs);
        }
    },
    render: function render() {
        var _props = this.props,
            containerClassName = _props.containerClassName,
            containerStyle = _props.containerStyle,
            cursorOffset = _props.cursorOffset,
            cursorPosition = _props.cursorPosition,
            fadeDurationInMs = _props.fadeDurationInMs,
            imageClassName = _props.imageClassName,
            imageStyle = _props.imageStyle,
            isRenderOnDemand = _props.isRenderOnDemand,
            largeImage = _props.largeImage,
            smallImage = _props.smallImage;
        var _state = this.state,
            isTransitionEntering = _state.isTransitionEntering,
            isTransitionActive = _state.isTransitionActive,
            isTransitionLeaving = _state.isTransitionLeaving;


        var offsetRatio = {
            x: largeImage.width / smallImage.width,
            y: largeImage.height / smallImage.height
        };

        var differentiatedImageCoordinates = {
            x: Math.round((cursorPosition.x - cursorOffset.x) * offsetRatio.x) * -1,
            y: Math.round((cursorPosition.y - cursorOffset.y) * offsetRatio.y) * -1
        };

        var minCoordinates = {
            x: (largeImage.width - smallImage.width) * -1,
            y: (largeImage.height - smallImage.height) * -1
        };

        var maxCoordinate = 0;

        var imageCoordinates = {
            x: (0, _lodash2.default)(differentiatedImageCoordinates.x, minCoordinates.x, maxCoordinate),
            y: (0, _lodash2.default)(differentiatedImageCoordinates.y, minCoordinates.y, maxCoordinate)
        };

        var isVisible = void 0;
        if (isTransitionEntering || isTransitionActive || isTransitionLeaving) {
            isVisible = true;
        } else {
            isVisible = false;
        }

        var defaultContainerStyle = {
            marginLeft: '10px',
            position: 'absolute',
            left: '100%',
            top: '0px',
            border: '1px solid #d6d6d6',
            overflow: 'hidden'
        };

        var computedContainerStyle = {
            width: smallImage.width,
            height: smallImage.height,
            opacity: this.state.isTransitionActive ? 1 : 0,
            transition: 'opacity ' + fadeDurationInMs + 'ms ease-in'
        };

        var translate = 'translate(' + imageCoordinates.x + 'px, ' + imageCoordinates.y + 'px)';

        var computedImageStyle = {
            width: largeImage.width,
            height: largeImage.height,
            transform: translate,
            WebkitTransform: translate,
            msTransform: translate
        };

        var component = _react2.default.createElement(
            'div',
            {
                className: containerClassName,
                key: 'enlarged',
                style: Object.assign({}, defaultContainerStyle, containerStyle, computedContainerStyle)
            },
            _react2.default.createElement('img', _extends({ 'data-hover': 'false' }, {
                alt: largeImage.alt,
                className: imageClassName,
                src: largeImage.src,
                srcSet: largeImage.srcSet,
                style: Object.assign({}, imageStyle, computedImageStyle)
            }))
        );

        if (isRenderOnDemand) {
            return isVisible ? component : null;
        }

        return component;
    }
});