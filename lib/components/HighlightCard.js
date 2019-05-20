"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["&& {color: white;}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = (0, _styledComponents["default"])(_Typography["default"])(_templateObject());

var HighlightCard = function HighlightCard(_ref) {
  var color = _ref.color,
      icon = _ref.icon,
      value = _ref.value,
      label = _ref.label;
  return _react["default"].createElement(_Card["default"], {
    style: {
      backgroundColor: color && (color[800] || color)
    }
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    alignItems: "center",
    spacing: 8
  }, _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: 3
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    justify: "center"
  }, icon)), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: 9,
    style: {
      backgroundColor: color && (color[600] || color)
    }
  }, _react["default"].createElement(_CardContent["default"], null, _react["default"].createElement(Text, {
    variant: "h6",
    gutterBottom: true
  }, value), _react["default"].createElement(Text, {
    variant: "subtitle1"
  }, label)))));
};

HighlightCard.propTypes = {
  color: (0, _propTypes.oneOfType)([(0, _propTypes.shape)({}), _propTypes.string]),
  icon: _propTypes.node,
  value: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string]),
  label: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string])
};
var _default = HighlightCard;
exports["default"] = _default;