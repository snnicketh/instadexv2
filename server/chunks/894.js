exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 3377:
/***/ ((module) => {

// Exports
module.exports = {
	"preloader": "PageLoader_preloader__FDeOh",
	"spinner": "PageLoader_spinner__meDB1",
	"sk-stretchdelay": "PageLoader_sk-stretchdelay__j2jTv",
	"rect2": "PageLoader_rect2__ueMEJ",
	"rect3": "PageLoader_rect3__UaR17",
	"rect4": "PageLoader_rect4__u5YBX",
	"rect5": "PageLoader_rect5__nG2hh"
};


/***/ }),

/***/ 7894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3377);
/* harmony import */ var _PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3__);




const PageLoader = ()=>{
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setTimeout(()=>setLoading((loading)=>!loading), 1000);
        return ()=>clearTimeout(timer);
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default().preloader)),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default().spinner)),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default().rect1))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default().rect2))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default().rect3))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default().rect4))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PageLoader_module_css__WEBPACK_IMPORTED_MODULE_3___default().rect5))
                    })
                ]
            })
        });
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLoader);


/***/ })

};
;