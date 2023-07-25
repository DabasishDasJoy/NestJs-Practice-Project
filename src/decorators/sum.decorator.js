"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumDec = void 0;
function SumDec(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var inc = originalMethod.apply(this, args) + 1;
        return inc;
    };
    console.log(originalMethod);
    return descriptor;
}
exports.SumDec = SumDec;
