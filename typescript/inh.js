var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cls1 = /** @class */ (function () {
    function cls1() {
    }
    cls1.prototype.fun1 = function () {
        alert("from class1");
    };
    return cls1;
}());
var cls2 = /** @class */ (function (_super) {
    __extends(cls2, _super);
    function cls2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cls2.prototype.fun2 = function () {
        alert("fom class2");
    };
    return cls2;
}(cls1));
var obj = new cls2();
obj.fun1();
