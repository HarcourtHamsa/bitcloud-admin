/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/auth.js":
/*!*************************!*\
  !*** ./context/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst { Provider  } = AuthContext;\nconst AuthProvider = ({ children  })=>{\n    const [authState, setAuthState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        token: \"\",\n        user: {}\n    });\n    const setUserAuthInfo = (data)=>{\n        const token = localStorage.setItem(\"token\", data);\n        setAuthState({\n            token\n        });\n    };\n    const setUserDetails = (data)=>{\n        const token = localStorage.setItem(\"user\", JSON.stringify(data));\n        setAuthState((prevState)=>({\n                ...prevState,\n                user: data\n            })\n        );\n    };\n    const isUserAuthenticated = ()=>{\n        const status = authState.token ? \"true\" : \"false\";\n        return status;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Provider, {\n        value: {\n            authState,\n            setUserAuthInfo,\n            setUserDetails,\n            isUserAuthenticated\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/harcourthamsa/Desktop/coindex-admin/context/auth.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFMUIsTUFBTUMsV0FBVyxpQkFBR0QsMERBQW1CLEVBQUU7QUFDekMsTUFBTSxFQUFFRyxRQUFRLEdBQUUsR0FBR0YsV0FBVztBQUVoQyxNQUFNRyxZQUFZLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUNyQyxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdQLHFEQUFjLENBQUM7UUFDL0NTLEtBQUssRUFBRSxFQUFFO1FBQ1RDLElBQUksRUFBRSxFQUFFO0tBQ1QsQ0FBQztJQUVGLE1BQU1DLGVBQWUsR0FBRyxDQUFDQyxJQUFJLEdBQUs7UUFDaEMsTUFBTUgsS0FBSyxHQUFHSSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUVGLElBQUksQ0FBQztRQUVqREwsWUFBWSxDQUFDO1lBQ1hFLEtBQUs7U0FDTixDQUFDLENBQUM7S0FDSjtJQUVELE1BQU1NLGNBQWMsR0FBRyxDQUFDSCxJQUFJLEdBQUs7UUFDL0IsTUFBTUgsS0FBSyxHQUFHSSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLEVBQUVFLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxJQUFJLENBQUMsQ0FBQztRQUVoRUwsWUFBWSxDQUFDLENBQUNXLFNBQVMsR0FBSyxDQUFDO2dCQUFFLEdBQUdBLFNBQVM7Z0JBQUVSLElBQUksRUFBRUUsSUFBSTthQUFFLENBQUM7UUFBQSxDQUFDLENBQUM7S0FDN0Q7SUFFRCxNQUFNTyxtQkFBbUIsR0FBRyxJQUFNO1FBQ2hDLE1BQU1DLE1BQU0sR0FBR2QsU0FBUyxDQUFDRyxLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU87UUFDakQsT0FBT1csTUFBTSxDQUFDO0tBQ2Y7SUFFRCxxQkFDRSw4REFBQ2pCLFFBQVE7UUFDUGtCLEtBQUssRUFBRTtZQUNMZixTQUFTO1lBQ1RLLGVBQWU7WUFDZkksY0FBYztZQUNkSSxtQkFBbUI7U0FDcEI7a0JBRUFkLFFBQVE7Ozs7O2lCQUNBLENBQ1g7Q0FDSDtBQUVvQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVydC1odWItdHJhZGUvLi9jb250ZXh0L2F1dGguanM/ODE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgeyBQcm92aWRlciB9ID0gQXV0aENvbnRleHQ7XG5cbmNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2F1dGhTdGF0ZSwgc2V0QXV0aFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICB0b2tlbjogXCJcIixcbiAgICB1c2VyOiB7fSxcbiAgfSk7XG5cbiAgY29uc3Qgc2V0VXNlckF1dGhJbmZvID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgZGF0YSk7XG5cbiAgICBzZXRBdXRoU3RhdGUoe1xuICAgICAgdG9rZW4sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0VXNlckRldGFpbHMgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgIHNldEF1dGhTdGF0ZSgocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIHVzZXI6IGRhdGEgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGlzVXNlckF1dGhlbnRpY2F0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzID0gYXV0aFN0YXRlLnRva2VuID8gXCJ0cnVlXCIgOiBcImZhbHNlXCI7XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgYXV0aFN0YXRlLFxuICAgICAgICBzZXRVc2VyQXV0aEluZm8sXG4gICAgICAgIHNldFVzZXJEZXRhaWxzLFxuICAgICAgICBpc1VzZXJBdXRoZW50aWNhdGVkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEF1dGhQcm92aWRlciwgQXV0aENvbnRleHQgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoU3RhdGUiLCJzZXRBdXRoU3RhdGUiLCJ1c2VTdGF0ZSIsInRva2VuIiwidXNlciIsInNldFVzZXJBdXRoSW5mbyIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0VXNlckRldGFpbHMiLCJKU09OIiwic3RyaW5naWZ5IiwicHJldlN0YXRlIiwiaXNVc2VyQXV0aGVudGljYXRlZCIsInN0YXR1cyIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/auth.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Admin - Bitcloud\"\n                    }, void 0, false, {\n                        fileName: \"/home/harcourthamsa/Desktop/coindex-admin/pages/_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Legit Crypto Option Admin Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/home/harcourthamsa/Desktop/coindex-admin/pages/_app.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, \"viewport\", false, {\n                        fileName: \"/home/harcourthamsa/Desktop/coindex-admin/pages/_app.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/harcourthamsa/Desktop/coindex-admin/pages/_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/harcourthamsa/Desktop/coindex-admin/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/harcourthamsa/Desktop/coindex-admin/pages/_app.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/harcourthamsa/Desktop/coindex-admin/pages/_app.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/harcourthamsa/Desktop/coindex-admin/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ21CO0FBQ0g7QUFFSTtBQUN0QjtBQUU3QixTQUFTTSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ1AsdURBQVk7OzBCQUNYLDhEQUFDSSxrREFBSTs7a0NBQ0gsOERBQUNJLE9BQUs7a0NBQUMsa0JBQWdCOzs7Ozs0QkFBUTtrQ0FDL0IsOERBQUNDLE1BQUk7d0JBQ0hDLElBQUksRUFBQyxhQUFhO3dCQUNsQkMsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7NEJBQzdDO2tDQUNGLDhEQUFDRixNQUFJO3dCQUNIQyxJQUFJLEVBQUMsVUFBVTt3QkFDZkMsT0FBTyxFQUFDLHVDQUF1Qzt1QkFDM0MsVUFBVTs7Ozs0QkFDZDtrQ0FDRiw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFFUCw4REFBQ2YsNERBQWM7MEJBQ2IsNEVBQUNPLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7O29CQUNiOzs7Ozs7WUFDSixDQUNmO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZXJ0LWh1Yi10cmFkZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWRtaW4gLSBCaXRjbG91ZDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiTGVnaXQgQ3J5cHRvIE9wdGlvbiBBZG1pbiBEYXNoYm9hcmRcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIGtleT1cInZpZXdwb3J0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();