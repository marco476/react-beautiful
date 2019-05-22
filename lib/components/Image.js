"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsive = _interopRequireDefault(require("../utils/responsive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  background-image: url(", ");\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  @media screen and ", " {\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.src;
}, function (props) {
  return !props.persistent && "display: none;";
}, function (props) {
  return props.grayed && "\n    transform: transale3d(0,0,0);\n    transition: all 0.5s ease-in-out;\n    filter: grayscale(0.8);\n    \n    &:hover,\n    &:focus {\n      filter: grayscale(0);\n    }\n  ";
}, function (props) {
  return props.grayed && props.active && 'filter: grayscale(0);';
}, _responsive["default"].md.min);

var _default = Image;
exports["default"] = _default;