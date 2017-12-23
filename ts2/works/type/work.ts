//인터페이스
interface Work{
    goForWork():void;
    doWork():void;
    goOut():void;
};

//인터페이스 사용하는 클래스
class Worker2 implements Work{
    goForWork():void{
        console.log("츨근합니다!");
    };
    doWork():void{
        console.log("일하는 중입니다.");
    };
    goOut():void{
        console.log("퇴근합니다!");
    };
};

//클래스 상속받는 클래스1
class FireFighter extends Worker2{
//소방서로 갑니다.
//소방합니다.
//집으로갑니다.
    goForWork():void{
        console.log("소방서로 갑니다.");
    };
    doWork():void{
        console.log("소방합니다.");
    };
    goOut():void{
        console.log("집으로 갑니다.");
    };
    doTest():void{
        console.log("소방테스트봅니다.");
    };
};

//클래스 상속받는 클래스2
class Teacher extends Worker2{
//doWork 실행시 가르칩니다.
    doWork():void{
        console.log("가르칩니다.");
    };
    doTest():void{
        console.log("시험봅니다.");
    };
};

//Work인터페이스 쓰는 인스턴스를 받아 this에 바인딩하여 처리하는 팩토리 클래스
class WorkFactory{
    obj : Work;
    constructor(obj : Work){
        this.obj = obj;
    };
    printObjInfo():void{
        this.obj.goForWork();
        this.obj.doWork();
        this.obj.goOut();
    };
};

//소방관 인스턴스 생성
let ff:Work = new FireFighter();
//선생님 인스턴스 생성
let tt:Work = new Teacher();

let f2 = new WorkFactory(ff);
f2.printObjInfo();

f2 = new WorkFactory(tt);
f2.printObjInfo();
