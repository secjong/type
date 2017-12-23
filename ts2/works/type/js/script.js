var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
h.str2 = "ㄴ나나나saasd";
String.prototype.equals = function (str) {
    if (typeof str == "object") {
        return str.toString() == this.toString();
    }
};
var str1 = "str";
var str2 = "str";
var str3 = new String("str");
var str4 = new String("str");
console.log(str1 == str2);
console.log(str1 === str2);
function returnExam() {
    console.log("전 test 스트링을 줍니다.");
    return "test";
}
;
function voidExam() {
    console.log("전 아무것도 안줍니다.");
}
;
var str = returnExam();
//타입스크립트에서 enum 도 지원함
var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["NetBook"] = 2] = "NetBook";
})(Computer || (Computer = {}));
; //내부적으로는 0부터 인덱싱되어있지만, enum으로 이름을 지어줄 수 있음
var pc = Computer.Desktop;
var PcTest = /** @class */ (function () {
    function PcTest(pc) {
        this.pc = pc;
    }
    PcTest.prototype.printPcInfo = function () {
        console.log("입력하신 PC 는 " + this.pc + " 입니다.");
    };
    ;
    return PcTest;
}());
;
var pt = new PcTest(Computer.Laptop);
pt.printPcInfo();
;
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.move = function () {
        console.log("개가 걷습니다.");
    };
    ;
    Dog.prototype.run = function () {
        console.log("개가 뛰어요.");
    };
    ;
    Dog.prototype.sleep = function () {
        console.log("개가 잡니다.");
    };
    ;
    return Dog;
}());
;
//인터페이스를 확장한 객체를 상속받아서 쓸수 있음!
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    ;
    //상속받은 sleep 메서드를 재정의함
    //하지만 아빠의 sleep을 덮어쓰는게 아니라 복사해서 나에 속한 메서드로 재정의하는 형태!
    Husky.prototype.sleep = function () {
        console.log(this.name + " 이 잡니다.");
    };
    ;
    return Husky;
}(Dog));
;
//Action 이 Dog 를 포함하고 있기 때문에 아래같이 가능!
var dog = new Husky("시베리안");
dog.move();
dog.run();
dog.sleep();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.move = function () {
        console.log("사람이 걷습니다.");
    };
    ;
    Person.prototype.run = function () {
        console.log("사람이 뛰어요.");
    };
    ;
    Person.prototype.sleep = function () {
        console.log("사람이 잡니다.");
    };
    ;
    return Person;
}());
;
var p = new Person();
var Factory = /** @class */ (function () {
    function Factory(obj) {
        this.obj = obj;
    }
    ;
    Factory.prototype.printObjInfo = function () {
        this.obj.move();
        this.obj.run();
        this.obj.sleep();
    };
    ;
    return Factory;
}());
;
var f = new Factory(p);
f.printObjInfo();
f = new Factory(dog);
f.printObjInfo();
//태그에찍어주기
document.getElementById("result_div").innerHTML = str;
;
//인터페이스 사용하는 클래스
var Worker2 = /** @class */ (function () {
    function Worker2() {
    }
    Worker2.prototype.goForWork = function () {
        console.log("츨근합니다!");
    };
    ;
    Worker2.prototype.doWork = function () {
        console.log("일하는 중입니다.");
    };
    ;
    Worker2.prototype.goOut = function () {
        console.log("퇴근합니다!");
    };
    ;
    return Worker2;
}());
;
//클래스 상속받는 클래스1
var FireFighter = /** @class */ (function (_super) {
    __extends(FireFighter, _super);
    function FireFighter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //소방서로 갑니다.
    //소방합니다.
    //집으로갑니다.
    FireFighter.prototype.goForWork = function () {
        console.log("소방서로 갑니다.");
    };
    ;
    FireFighter.prototype.doWork = function () {
        console.log("소방합니다.");
    };
    ;
    FireFighter.prototype.goOut = function () {
        console.log("집으로 갑니다.");
    };
    ;
    FireFighter.prototype.doTest = function () {
        console.log("소방테스트봅니다.");
    };
    ;
    return FireFighter;
}(Worker2));
;
//클래스 상속받는 클래스2
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //doWork 실행시 가르칩니다.
    Teacher.prototype.doWork = function () {
        console.log("가르칩니다.");
    };
    ;
    Teacher.prototype.doTest = function () {
        console.log("시험봅니다.");
    };
    ;
    return Teacher;
}(Worker2));
;
//Work인터페이스 쓰는 인스턴스를 받아 this에 바인딩하여 처리하는 팩토리 클래스
var WorkFactory = /** @class */ (function () {
    function WorkFactory(obj) {
        this.obj = obj;
    }
    ;
    WorkFactory.prototype.printObjInfo = function () {
        this.obj.goForWork();
        this.obj.doWork();
        this.obj.goOut();
    };
    ;
    return WorkFactory;
}());
;
//소방관 인스턴스 생성
var ff = new FireFighter();
//선생님 인스턴스 생성
var tt = new Teacher();
var f2 = new WorkFactory(ff);
f2.printObjInfo();
f2 = new WorkFactory(tt);
f2.printObjInfo();
