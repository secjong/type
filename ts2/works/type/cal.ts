class Cal{
    private num1: number = 0;
    private num2: number = 1;

    //생성자함수에 인자를 지정해주면 밖에서 new로 생성할 때 무조건 맞는 인자를 주어야 한다.
    //생성자함수를 써주지 않으면 인자가 없는 생성자함수를 기본으로 만들어준다.
    constructor(num1: number, num2: number){
        this.num1 = num1;
        this.num2 = num2;
    };

    private add():number{
        return this.num1 + this.num2;
    };

    private multiple():number{
        return this.num1 * this.num2;
    };

    private minus():number{
        return this.num1 - this.num2;
    };

    private divide():number{
        return this.num1 / this.num2;
    };

    public getCalResult(op:string):number{
        if(op == "+"){
            return this.add();
        }
        if(op == "-"){
            return this.minus();
        }
        if(op == "*"){
            return this.multiple();
        }
        if(op == "/"){
            return this.divide();
        }
    };

};

var c = new Cal(3,4);
console.log(c.getCalResult("/"));

