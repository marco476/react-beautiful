"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ChevronLeft = _interopRequireDefault(require("@material-ui/icons/ChevronLeft"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AsideLayout(_ref) {
  var open = _ref.isOpen,
      aside = _ref.aside,
      collapsible = _ref.collapsible,
      children = _ref.children,
      className = _ref.className;

  var _useState = (0, _react.useState)(open),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      changeIsOpen = _useState2[1];

  (0, _react.useEffect)(function () {
    if (open !== isOpen) {
      changeIsOpen(open);
    }
  }, [open]);
  var childrenBreakpoints = {
    xs: 12
  };

  if (isOpen) {
    childrenBreakpoints = _objectSpread({}, childrenBreakpoints, {
      md: 8,
      lg: 9,
      xl: 10
    });
  }

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Grid["default"], {
    spacing: 3,
    container: true,
    className: className
  }, isOpen && _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: 4,
    lg: 3,
    xl: 2,
    container: true,
    direction: "column"
  }, collapsible && _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    justify: "flex-end"
  }, _react["default"].createElement(_Grid["default"], {
    item: true
  }, _react["default"].createElement(_IconButton["default"], {
    onClick: function onClick() {
      return changeIsOpen(false);
    }
  }, _react["default"].createElement(_ChevronLeft["default"], null))))), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, aside)), _react["default"].createElement(_Grid["default"], _extends({
    item: true
  }, childrenBreakpoints, {
    container: true,
    direction: "column"
  }), !isOpen && collapsible && _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, _react["default"].createElement(_IconButton["default"], {
    onClick: function onClick() {
      return changeIsOpen(true);
    }
  }, _react["default"].createElement(_Menu["default"], null))), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, children))));
}

AsideLayout.propTypes = {
  className: _propTypes.string,
  aside: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string]),
  children: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string]),
  isOpen: _propTypes.bool,
  collapsible: _propTypes.bool
};
AsideLayout.defaultProps = {
  isOpen: true,
  collapsible: true
};
var _default = AsideLayout;
exports["default"] = _default;