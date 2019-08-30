"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _withMobileDialog = _interopRequireDefault(require("@material-ui/core/withMobileDialog"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  && {\n    fill: white;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  && {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    z-index: 999;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  && {\n    &::-webkit-scrollbar {\n      width: 6px;\n    }\n\n    &::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n      background-color: #f5f5f5;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: #3f51b5;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CustomDialog = (0, _styledComponents["default"])(_Dialog["default"])(_templateObject());
var FabClose = (0, _styledComponents["default"])(_Fab["default"])(_templateObject2());
var Close = (0, _styledComponents["default"])(_Close["default"])(_templateObject3());

function DialogModal(_ref) {
  var contentClassName = _ref.contentClassName,
      titleClassName = _ref.titleClassName,
      descriptionClassName = _ref.descriptionClassName,
      footerClassName = _ref.footerClassName,
      onClose = _ref.onClose,
      title = _ref.title,
      description = _ref.description,
      footer = _ref.footer,
      children = _ref.children,
      showClose = _ref.showClose,
      rest = _objectWithoutProperties(_ref, ["contentClassName", "titleClassName", "descriptionClassName", "footerClassName", "onClose", "title", "description", "footer", "children", "showClose"]);

  return _react["default"].createElement(CustomDialog, _extends({
    onClose: onClose
  }, rest), title && _react["default"].createElement(_DialogTitle["default"], {
    className: titleClassName
  }, title), _react["default"].createElement(_DialogContent["default"], {
    className: contentClassName
  }, showClose && onClose && _react["default"].createElement(FabClose, {
    onClick: onClose,
    color: "primary",
    size: "small"
  }, _react["default"].createElement(Close, null)), description && _react["default"].createElement(_DialogContentText["default"], {
    className: descriptionClassName
  }, description), children), footer && _react["default"].createElement(_DialogActions["default"], {
    className: footerClassName
  }, footer));
}

DialogModal.propTypes = {
  className: _propTypes.string,
  contentClassName: _propTypes.string,
  titleClassName: _propTypes.string,
  descriptionClassName: _propTypes.string,
  footerClassName: _propTypes.string,
  showClose: _propTypes.bool,
  onClose: _propTypes.func.isRequired,
  title: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]),
  description: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]),
  footer: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]),
  children: _propTypes.node,
  fullScreen: _propTypes.bool.isRequired // By withMobileDialog HOC, thanks Material.

};

var _default = (0, _withMobileDialog["default"])()(DialogModal);

exports["default"] = _default;