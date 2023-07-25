var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function addId(obj) {
    var id = Math.random() * 1000;
    return __assign(__assign({}, obj), { id: id });
}
var user = addId({
    name: "Joy",
    age: 20,
});
user.age;
