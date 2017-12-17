var Cal = /** @class */ (function () {
    //생성자함수에 인자를 지정해주면 밖에서 new로 생성할 때 무조건 맞는 인자를 주어야 한다.
    //생성자함수를 써주지 않으면 인자가 없는 생성자함수를 기본으로 만들어준다.
    function Cal(num1, num2) {
        this.num1 = 0;
        this.num2 = 1;
        this.num1 = num1;
        this.num2 = num2;
    }
    ;
    Cal.prototype.add = function () {
        return this.num1 + this.num2;
    };
    ;
    Cal.prototype.multiple = function () {
        return this.num1 * this.num2;
    };
    ;
    Cal.prototype.minus = function () {
        return this.num1 - this.num2;
    };
    ;
    Cal.prototype.divide = function () {
        return this.num1 / this.num2;
    };
    ;
    Cal.prototype.getCalResult = function (op) {
        if (op == "+") {
            return this.add();
        }
        if (op == "-") {
            return this.minus();
        }
        if (op == "*") {
            return this.multiple();
        }
        if (op == "/") {
            return this.divide();
        }
    };
    ;
    return Cal;
}());
;
var c = new Cal(3, 4);
console.log(c.getCalResult("/"));
//# sourceMappingURL=cal.js.map