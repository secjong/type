class User {
    userName:string;
    userAge:number;
};



class UserTest {
    users:Array<User> = [];
    public addUser(user:User):void{
        this.users.push(user);
    };

    public printUsers():void{
        console.log(JSON.stringify(this.users));
    };

    public getUser(idx:number):User{
        return this.users[idx];
    };
};

var ut:UserTest = new UserTest();

var user:User = new User();

user.userName = "홍길동";
user.userAge = 12;
ut.addUser(user);

user = new User();
user.userName = "채세종";
user.userAge = 22;
ut.addUser(user);

user = new User();
user.userName = "강아지";
user.userAge = 32;
ut.addUser(user);

ut.printUsers();

var user2 = ut.getUser(0);
console.log(user2);