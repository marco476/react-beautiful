"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _validator = require("validator");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _Snack = _interopRequireDefault(require("./Snack"));

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NewslettersPopup =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(NewslettersPopup, _PureComponent);

  function NewslettersPopup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NewslettersPopup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NewslettersPopup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      email: '',
      isSuccess: false,
      isFailed: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeEmail", function (e) {
      return _this.setState({
        email: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetResultState", function () {
      return _this.setState({
        isSuccess: false,
        isFailed: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          onFinish = _this$props.onFinish,
          onSubmit = _this$props.onSubmit;
      var email = _this.state.email;

      _this.setState({
        isProcessing: true
      });

      onSubmit(email).then(function () {
        onFinish(email);

        _this.setState({
          isSuccess: true,
          isFailed: false
        });
      })["catch"](function () {
        return _this.setState({
          isSuccess: false,
          isFailed: true
        });
      })["finally"](function () {
        _this.setState({
          isProcessing: false
        });

        onClose();
      });
    });

    return _this;
  }

  _createClass(NewslettersPopup, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onClose = _this$props2.onClose,
          rest = _objectWithoutProperties(_this$props2, ["onClose"]);

      var _this$state = this.state,
          email = _this$state.email,
          isSuccess = _this$state.isSuccess,
          isFailed = _this$state.isFailed,
          isProcessing = _this$state.isProcessing;
      var canSubmit = email && (0, _validator.isEmail)(email) && !isProcessing;
      var fieldError = email && !(0, _validator.isEmail)(email);
      var snackVariant;

      if (isSuccess) {
        snackVariant = 'success';
      } else if (isFailed) {
        snackVariant = 'fail';
      }

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Snack["default"], {
        variant: snackVariant,
        open: isSuccess || isFailed,
        onExited: this.resetResultState,
        message: _react["default"].createElement("div", {
          className: "flex middle-xs"
        }, isSuccess && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_CheckCircle["default"], {
          className: "m-r-8"
        }), _react["default"].createElement("span", null, "Iscrizione effettuata con successo!")), isFailed && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Error["default"], {
          className: "m-r-8"
        }), _react["default"].createElement("span", null, "Errore imprevisto, si prega di riprovare pi\xF9 tardi")))
      }), _react["default"].createElement(_Dialog["default"], _extends({
        title: "Iscriviti alla newsletter",
        description: _react["default"].createElement("span", null, "Rimani aggiornato sugli ", _react["default"].createElement("strong", null, "sviluppi"), " del portale e sulle ", _react["default"].createElement("strong", null, "novit\xE0"), " in arrivo. Avrai modo di ", _react["default"].createElement("strong", null, "disdire quando desideri"), " con il link presente in ogni email che riceverai."),
        onClose: onClose,
        footer: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button["default"], {
          className: "m-r-8",
          onClick: onClose,
          color: "default"
        }, "Cancella"), _react["default"].createElement(_Button["default"], {
          onClick: this.handleSubmit,
          color: "primary",
          disabled: !canSubmit
        }, "Iscriviti"))
      }, rest), _react["default"].createElement(_TextField["default"], {
        className: "m-t-8 full-width",
        label: "Inserisci email",
        placeholder: "example@provider.it",
        error: fieldError,
        helperText: fieldError && "L'email inserita non è valida",
        onChange: this.handleChangeEmail
      })));
    }
  }]);

  return NewslettersPopup;
}(_react.PureComponent);

NewslettersPopup.propTypes = {
  onClose: _propTypes.func.isRequired,
  onSubmit: _propTypes.func.isRequired,
  onFinish: _propTypes.func
};
NewslettersPopup.defaultProps = {
  onFinish: function onFinish() {}
};
var _default = NewslettersPopup;
exports["default"] = _default;