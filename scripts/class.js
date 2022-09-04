class Member{
    //コンストラクター
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // メソッド
    getName(){
        return this.lastName + " " + this.firstName;
    }
}

// Memberオブジェクトを継承したBusiness Memberクラスを定義
class BusinessMember extends Member{
    // 引数にClazzを追加
    constructor(firstName, lastName, clazz){
        super(firstName, lastName);
        this.clazz = clazz;
    }

    // 役職込みの名前を返すように修正
    getName() {
        return super.getName() + "/役職:" + this.clazz; 
    }
}

let m = new BusinessMember("taroh", "Yamada", "課長");
console.log(m.getName());
