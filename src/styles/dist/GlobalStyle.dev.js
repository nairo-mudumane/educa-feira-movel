"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n:root {\n    --border-color: #cecece;\n\n    --bg-white-1: #fff;\n    --bg-white-2: #f5f6fa;\n    --bg-yellow-1: #f2871c;\n    --bg-gray-1: #414c52;\n    --bg-gray-2: #e9eef4;\n    --bg-red-1: red;\n    --bg-green-1: #ef3;\n    \n    --color-white-1: #fefefe;\n    --color-black-1: #0e0e0e;\n    --color-yellow-1: #f2871c;\n    --color-gray-1: #414c52;\n}\n*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    transition: all .3s ease;\n}\nbody {\n    background-color: var(--bg-white-2);\n}\np {\n    font-size: .95rem;\n    margin-bottom: .5rem;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    margin-bottom: .5rem;\n}\na {\n    font:inherit;\n}\ninput,\ntextarea,\nbutton {\n    border: 0;\n    outline: none;\n}\nbutton {\n    cursor: pointer;\n}\nimg,\nsvg {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n.no-margin {\n    margin: 0;\n}\n.no-padding {\n    padding: 0;\n}\n/* animation */\n.animeLeft{\n    transform: translateX(-50px);\n    opacity: 0;\n    animation: anime 0.5s forwards;  \n}\n.animeTop {\n    transform: translateY(-50px);\n    opacity: 0;\n    animation: anime 0.5s forwards;\n}\n.animeBottom {\n    transform: translateY(50px);\n    opacity: 0;\n    animation: anime 0.5s forwards;\n}\n@keyframes anime {\n    to {\n        transform: initial;\n        opacity: initial;\n    }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = GlobalStyle;
exports["default"] = _default;