class Hello {
    private str: string = "private string";
    public str2: string = "public string";
    private test1():void{

    };
    private add(num1: number, num2: number):number{
        return num1 + num2;
    };
    public test2():void{
        let num1: number = 5;
        let num2: number = 3;
        let numArr: number[] = [1,2,3];
        let numArr2: Array<number> = [1,2,3];
        let tp: [string, number];
        tp = ["1",1];

        console.log(num1 + num2);
        console.log("hello hello");
        this.test1();
    };
}

var h = new Hello();
h.test2();
h.str2 = "ㄴ나나나saasd";

String.prototype.equals = function(str){
    if(typeof str == "object"){
        return str.toString() == this.toString();
    }
};

let str1: string = "str";
let str2: string = "str";
let str3: String = new String("str");
let str4: String = new String("str");

console.log(str1 == str2);
console.log(str1 === str2);

function returnExam():string{
    console.log("전 test 스트링을 줍니다.");
    return "test";
};

function voidExam():void{
    console.log("전 아무것도 안줍니다.");
};

let str = returnExam();




//타입스크립트에서 enum 도 지원함
enum Computer{Desktop, Laptop, NetBook}; //내부적으로는 0부터 인덱싱되어있지만, enum으로 이름을 지어줄 수 있음

let pc:Computer = Computer.Desktop;

class PcTest{
    pc : Computer;
    constructor(pc:Computer){
        this.pc = pc;
    }
    printPcInfo():void{
        console.log("입력하신 PC 는 " + this.pc + " 입니다.");
    };
};

let pt:PcTest = new PcTest(Computer.Laptop);
pt.printPcInfo();



//인터페이스
interface Action{
    move():void;
    run():void;
    sleep():void;
};

class Dog implements Action {
    move():void{
        console.log("개가 걷습니다.");
    };
    run():void{
        console.log("개가 뛰어요.");
    };
    sleep():void{
        console.log("개가 잡니다.");
    };
};

//인터페이스를 확장한 객체를 상속받아서 쓸수 있음!
class Husky extends Dog{
    name : string;
    constructor(name:string){
        super();
        this.name = name;
    };
    //상속받은 sleep 메서드를 재정의함
    //하지만 아빠의 sleep을 덮어쓰는게 아니라 복사해서 나에 속한 메서드로 재정의하는 형태!
    sleep():void{
        console.log(this.name + " 이 잡니다.");
    };
};

//Action 이 Dog 를 포함하고 있기 때문에 아래같이 가능!
let dog:Action = new Husky("시베리안");
dog.move();
dog.run();
dog.sleep();


class Person implements Action{
    move():void{
        console.log("사람이 걷습니다.");
    };
    run():void{
        console.log("사람이 뛰어요.");
    };
    sleep():void{
        console.log("사람이 잡니다.");
    };
};

let p:Action = new Person();


class Factory{
    obj: Action;
    constructor(obj: Action){
        this.obj = obj;
    };

    printObjInfo():void{
        this.obj.move();
        this.obj.run();
        this.obj.sleep();
    };
};

let f:Factory = new Factory(p);
f.printObjInfo();
f = new Factory(dog);
f.printObjInfo();



//태그에찍어주기
document.getElementById("result_div").innerHTML = str;
