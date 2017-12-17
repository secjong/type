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

console.log(h.str2);
