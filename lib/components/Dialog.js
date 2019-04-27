"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _withMobileDialog = _interopRequireDefault(require("@material-ui/core/withMobileDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["&& { fill: white; }"]);

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
  var data = _taggedTemplateLiteral(["\n  && {\n    &::-webkit-scrollbar {\n      width: 6px;\n    }\n  \n    &::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n      background-color: #F5F5F5;\n    }\n    \n    &::-webkit-scrollbar-thumb {\n      background-color: #3f51b5;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CustomDialog = (0, _styledComponents["default"])(_Dialog["default"])(_templateObject());
var FabClose = (0, _styledComponents["default"])(_Fab["default"])(_templateObject2());
var Close = (0, _styledComponents["default"])(_Close["default"])(_templateObject3());

var DialogModal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DialogModal, _PureComponent);

  function DialogModal() {
    _classCallCheck(this, DialogModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(DialogModal).apply(this, arguments));
  }

  _createClass(DialogModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          contentClassName = _this$props.contentClassName,
          titleClassName = _this$props.titleClassName,
          footerClassName = _this$props.footerClassName,
          isOpen = _this$props.isOpen,
          onClose = _this$props.onClose,
          title = _this$props.title,
          description = _this$props.description,
          footer = _this$props.footer,
          children = _this$props.children,
          fullScreen = _this$props.fullScreen,
          rest = _objectWithoutProperties(_this$props, ["className", "contentClassName", "titleClassName", "footerClassName", "isOpen", "onClose", "title", "description", "footer", "children", "fullScreen"]);

      return _react["default"].createElement(CustomDialog, _extends({
        className: className,
        open: isOpen,
        onClose: onClose,
        fullScreen: fullScreen
      }, rest), title && _react["default"].createElement(_DialogTitle["default"], {
        className: titleClassName
      }, title), _react["default"].createElement(_DialogContent["default"], {
        className: contentClassName
      }, _react["default"].createElement(FabClose, {
        onClick: onClose,
        color: "primary",
        size: "small"
      }, _react["default"].createElement(Close, null)), description && _react["default"].createElement(_DialogContentText["default"], null, description), children), footer && _react["default"].createElement(_DialogActions["default"], {
        className: footerClassName
      }, footer));
    }
  }]);

  return DialogModal;
}(_react.PureComponent);

DialogModal.propTypes = {
  className: _propTypes.string,
  contentClassName: _propTypes.string,
  titleClassName: _propTypes.string,
  footerClassName: _propTypes.string,
  isOpen: _propTypes.bool,
  onClose: _propTypes.func.isRequired,
  title: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]),
  description: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]),
  footer: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.node]),
  children: _propTypes.node,
  fullScreen: _propTypes.bool.isRequired
};
DialogModal.defaultProps = {
  className: '',
  titleClassName: '',
  footerClassName: '',
  contentClassName: '',
  title: '',
  description: '',
  isOpen: false,
  footer: null,
  children: null
};

var _default = (0, _withMobileDialog["default"])()(DialogModal);

exports["default"] = _default;