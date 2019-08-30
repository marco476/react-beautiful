"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  && {\n    color: white;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = (0, _styledComponents["default"])(_Typography["default"])(_templateObject());
var valueSizes = {
  large: 'h5',
  normal: 'h6',
  small: 'subtitle1'
};
var labelSizes = {
  large: 'h6',
  normal: 'subtitle1',
  small: 'body1'
};

function HighlightCard(_ref) {
  var className = _ref.className,
      size = _ref.size,
      primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor,
      icon = _ref.icon,
      value = _ref.value,
      label = _ref.label;
  return _react["default"].createElement(_Card["default"], {
    style: {
      backgroundColor: secondaryColor
    },
    className: className
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    alignItems: "center",
    spacing: 1
  }, icon && _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: 3
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    justify: "center"
  }, icon)), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: icon ? 9 : 12,
    style: {
      backgroundColor: primaryColor
    }
  }, _react["default"].createElement(_CardContent["default"], null, value && ((0, _isString["default"])(value) ? _react["default"].createElement(Text, {
    variant: valueSizes[size],
    gutterBottom: !!label
  }, value) : value), label && ((0, _isString["default"])(label) ? _react["default"].createElement(Text, {
    variant: labelSizes[size]
  }, label) : label)))));
}

HighlightCard.propTypes = {
  primaryColor: _propTypes.string,
  secondaryColor: _propTypes.string,
  icon: _propTypes.node,
  value: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string]),
  label: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string]),
  size: _propTypes.string,
  className: _propTypes.string
};
HighlightCard.defaultProps = {
  size: 'normal'
};
var _default = HighlightCard;
exports["default"] = _default;