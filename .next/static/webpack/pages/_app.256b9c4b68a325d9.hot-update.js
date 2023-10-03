"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./component/little-tokyo.js":
/*!***********************************!*\
  !*** ./component/little-tokyo.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nconst LittleTokyo = ()=>{\n    _s();\n    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        ref: refContainer,\n        className: \"little-tokyo\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                right: \"50%\",\n                ml: \"calc(\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dashp\\\\Documents\\\\ProjectTemplates\\\\myPortfolio\\\\component\\\\little-tokyo.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined),\n            \"LittleTokyo!!!\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dashp\\\\Documents\\\\ProjectTemplates\\\\myPortfolio\\\\component\\\\little-tokyo.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LittleTokyo, \"RAm4Kia1F4B5IJe27fV9d70tHX0=\");\n_c = LittleTokyo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LittleTokyo);\nvar _c;\n$RefreshReg$(_c, \"LittleTokyo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbGl0dGxlLXRva3lvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnRTtBQUNqQjtBQUNqQjtBQUMyQztBQUM3QjtBQUU1QyxTQUFTUyxZQUFZQyxDQUFDO0lBQ3BCLE9BQU9DLEtBQUtDLElBQUksQ0FBQyxJQUFJRCxLQUFLRSxHQUFHLENBQUNILElBQUksR0FBRztBQUN2QztBQUVBLE1BQU1JLGNBQWM7O0lBQ2xCLE1BQU1DLGVBQWViLDZDQUFNQTtJQUMzQixNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXZDLHFCQUNFLDhEQUFDSSxpREFBR0E7UUFDRmMsS0FBS0g7UUFDTEksV0FBVTtRQUNWQyxHQUFFO1FBQ0ZDLElBQUk7WUFBQztZQUFTO1lBQVM7U0FBUztRQUNoQ0MsSUFBSTtZQUFDO1lBQVM7WUFBVTtTQUFTO1FBQ2pDQyxHQUFHO1lBQUM7WUFBSztZQUFLO1NBQUk7UUFDbEJDLEdBQUc7WUFBQztZQUFLO1lBQUs7U0FBSTtRQUNsQkMsVUFBUzs7WUFFUlQseUJBQ0MsOERBQUNYLHFEQUFPQTtnQkFBQ3FCLE1BQUs7Z0JBQUtELFVBQVM7Z0JBQVdFLE1BQUs7Z0JBQU1DLE9BQU07Z0JBQU1DLElBQUc7Ozs7OztZQUNqRTs7Ozs7OztBQUlSO0dBckJNZjtLQUFBQTtBQXVCTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvbGl0dGxlLXRva3lvLmpzPzA1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xyXG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgTGl0dGxlVG9reW8gPSAoKSA9PiB7XHJcbiAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICByZWY9e3JlZkNvbnRhaW5lcn1cclxuICAgICAgY2xhc3NOYW1lPVwibGl0dGxlLXRva3lvXCJcclxuICAgICAgbT1cImF1dG9cIlxyXG4gICAgICBhdD17WyctMjBweCcsICctNjBweCcsICctMTIwcHgnXX1cclxuICAgICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfVxyXG4gICAgICB3PXtbMjgwLCA0ODAsIDY0MF19XHJcbiAgICAgIGg9e1syODAsIDQ4MCwgNjQwXX1cclxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICA+XHJcbiAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgbGVmdD1cIjUwJVwiIHJpZ2h0PVwiNTAlXCIgbWw9XCJjYWxjKFwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIExpdHRsZVRva3lvISEhXHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpdHRsZVRva3lvXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIkxpdHRsZVRva3lvIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwiYXQiLCJtYiIsInciLCJoIiwicG9zaXRpb24iLCJzaXplIiwibGVmdCIsInJpZ2h0IiwibWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/little-tokyo.js\n"));

/***/ })

});