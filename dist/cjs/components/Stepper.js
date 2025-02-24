"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
require("../styles/stepper.css");
var Stepper = function (props) {
    var _a = props.children, children = _a === void 0 ? [] : _a, _b = props.showProgressBar, showProgressBar = _b === void 0 ? true : _b, _c = props.defaultActiveStep, defaultActiveStep = _c === void 0 ? 1 : _c, backBtn = props.backBtn, continueBtn = props.continueBtn, submitBtn = props.submitBtn, _d = props.onContinue, onContinue = _d === void 0 ? function () { } : _d, _e = props.onPrev, onPrev = _e === void 0 ? function () { } : _e, _f = props.onSubmit, onSubmit = _f === void 0 ? function () { } : _f, _g = props.btnPos, btnPos = _g === void 0 ? 'space-between' : _g, _h = props.barWidth, barWidth = _h === void 0 ? '' : _h, _j = props.strokeColor, strokeColor = _j === void 0 ? '#cdd3d8' : _j, _k = props.fillStroke, fillStroke = _k === void 0 ? '#3a4047' : _k, _l = props.stroke, stroke = _l === void 0 ? 2 : _l, _m = props.activeColor, activeColor = _m === void 0 ? '#3A4047' : _m, _o = props.activeProgressBorder, activeProgressBorder = _o === void 0 ? '2px solid #f3f4f5' : _o, _p = props.progressBarClassName, progressBarClassName = _p === void 0 ? '' : _p, _q = props.contentBoxClassName, contentBoxClassName = _q === void 0 ? '' : _q, _r = props.allowClickControl, allowClickControl = _r === void 0 ? true : _r, _s = props.isValidNext, isValidNext = _s === void 0 ? true : _s;
    var _t = (0, react_1.useState)(0), active = _t[0], setActive = _t[1];
    var _u = (0, react_1.useState)(false), canGoNext = _u[0], setCanGoNext = _u[1];
    (0, react_1.useEffect)(function () {
        if (defaultActiveStep <= children.length &&
            defaultActiveStep > 0) {
            progress(defaultActiveStep - 1);
            setActive(defaultActiveStep);
        }
        else {
            progress(0);
            setActive(1);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        setCanGoNext(isValidNext);
    }, [isValidNext]);
    (0, react_1.useEffect)(function () {
        if (children.length > 1 && showProgressBar) {
            //Progress Circle Border & Background Color
            children.map(function (_child, ind) {
                var element = document.getElementById("input_".concat(ind));
                if (element.classList.length > 1) {
                    element.style.background = activeColor;
                    element.style.border = activeProgressBorder;
                }
                else {
                    element.style.background = '#fff';
                    element.style.border = '2px solid #3A4047';
                }
            });
        }
    }, [active]);
    var previousStep = function () {
        if (!active || active <= 1) {
            return;
        }
        progress(active - 2);
        var newActive = active - 1;
        setActive(newActive);
        onPrev(newActive);
    };
    var nextStep = function () {
        if (!active || active >= children.length) {
            return;
        }
        if (canGoNext) {
            progress(active);
            var newActive = active + 1;
            setActive(newActive);
            onContinue(newActive);
        }
        else {
            // Handle the case where canGoNext is false (e.g., show an error message)
            console.error("Can't go next"); // You can replace this with your error handling logic
        }
    };
    var progressClick = function (ind) {
        if (!allowClickControl)
            return;
        setActive(ind + 1);
        progress(ind);
    };
    var progress = function (stepNum) {
        var _a;
        if (children.length > 1 && showProgressBar) {
            var p = (stepNum / (children.length - 1)) * 100;
            document.getElementsByClassName('percent')[0].style.width = "".concat(p, "%");
        }
        if (children.length > 1 && showProgressBar) {
            for (var index = 0; index < children.length; index++) {
                var e = document.getElementById("input_".concat(index));
                var eInd = parseInt((_a = e === null || e === void 0 ? void 0 : e.id) === null || _a === void 0 ? void 0 : _a.split('_')[1]);
                if (eInd === stepNum) {
                    e.classList.add('selected');
                    e.classList.remove('completed');
                }
                if (eInd <= stepNum) {
                    e.classList.add('completed');
                }
                if (eInd > stepNum) {
                    e.classList.remove('selected', 'completed');
                }
            }
        }
    };
    return (react_1["default"].createElement("div", { className: 'stepperDiv' },
        children.length > 1 && showProgressBar && (react_1["default"].createElement("div", { className: "".concat('progressBarDiv', " ").concat(progressBarClassName) },
            react_1["default"].createElement("div", { className: 'progressBarContainer', style: { width: barWidth } },
                react_1["default"].createElement("div", { className: 'progress', style: { borderBottom: "".concat(stroke, "px solid ").concat(strokeColor) } },
                    react_1["default"].createElement("div", { className: 'percent', style: { borderBottom: "".concat(stroke, "px solid ").concat(fillStroke) } })),
                react_1["default"].createElement("div", { className: 'steps' }, children.map(function (_child, ind) {
                    return (react_1["default"].createElement("div", { key: ind, className: 'step', id: "input_".concat(ind), onClick: function () { return progressClick(ind); } }));
                }))))),
        react_1["default"].createElement("div", { className: contentBoxClassName },
            children.length > 1
                ? children.map(function (child, index) {
                    return active === index + 1 && child;
                })
                : children,
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    justifyContent: btnPos,
                    marginTop: '20px'
                } },
                active > 1 ? (backBtn ? (react_1["default"].createElement("span", { onClick: previousStep }, backBtn)) : (react_1["default"].createElement("button", { className: 'defaultBtn', onClick: previousStep, style: { marginRight: '20px' } }, "Go Back"))) : (react_1["default"].createElement("span", null)),
                active < children.length ? (continueBtn ? (react_1["default"].createElement("span", { onClick: function () { return nextStep(); } }, continueBtn)) : (react_1["default"].createElement("button", { className: 'defaultBtn', onClick: function () { return nextStep(); } }, "Continue"))) : submitBtn ? (react_1["default"].createElement("span", { onClick: function () { return onSubmit(active); } }, submitBtn)) : (react_1["default"].createElement("button", { className: 'defaultBtn', onClick: function () { return onSubmit(active); } }, "Submit"))))));
};
exports["default"] = Stepper;
//# sourceMappingURL=Stepper.js.map