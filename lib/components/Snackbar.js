"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  && {\n    > div {\n      ", "\n      ", "\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CustomSnack = (0, _styledComponents["default"])(_Snackbar["default"])(_templateObject(), function (props) {
  return props.variant === 'success' && "background-color: ".concat(_green["default"][600], ";");
}, function (props) {
  return props.variant === 'fail' && "background-color: ".concat(_red["default"][600], ";");
});

function Snack(_ref) {
  var onClose = _ref.onClose,
      _ref$action = _ref.action,
      action = _ref$action === void 0 ? [] : _ref$action,
      showClose = _ref.showClose,
      rest = _objectWithoutProperties(_ref, ["onClose", "action", "showClose"]);

  return _react["default"].createElement(CustomSnack, _extends({
    onClose: onClose,
    action: [].concat(_toConsumableArray(action), [showClose && _react["default"].createElement(_IconButton["default"], {
      key: "close",
      color: "inherit",
      onClick: onClose
    }, _react["default"].createElement(_Close["default"], null))])
  }, rest));
}

Snack.propTypes = {
  onClose: _propTypes.func.isRequired,
  showClose: _propTypes.bool,
  action: _propTypes.array
};
var _default = Snack;
exports["default"] = _default;