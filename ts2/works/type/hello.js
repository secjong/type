var Hello = /** @class */ (function () {
    function Hello() {
        this.str = "private string";
        this.str2 = "public string";
    }
    Hello.prototype.test1 = function () {
    };
    ;
    Hello.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    ;
    Hello.prototype.test2 = function () {
        var num1 = 5;
        var num2 = 3;
        var numArr = [1, 2, 3];
        var numArr2 = [1, 2, 3];
        var tp;
        tp = ["1", 1];
        console.log(num1 + num2);
        console.log("hello hello");
        this.test1();
    };
    ;
    return Hello;
}());
var h = new Hello();
h.test2();
console.log(h.str2);
//# sourceMappingURL=hello.js.map