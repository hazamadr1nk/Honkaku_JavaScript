/**
 * @constructor
 * @classdesc メンバーについての情報を管理します
 * @param {string} firstname 姓
 * @param {string} lastName  名
 * @throws {Error} fistName か lastName が足りない 
 * @author Yoshihiro Yamada
 * @version 1.0.0
 */

let Member = function(firstName, lastName){
    if (firstName === undefined || lastName === undefined) {
        throw new Error("firstNameかlastNameが足りません");
    }
    this.firstName = firstName;
    this.lastName = lastName;
};

/**
 * メンバーに関する詳細情報を表示します。
 * @return {string} メンバーの氏名
 * @deprecated {@link Member#toString}メソッドを代わりに利用してください
 */
Member.prototype.getName = function(){
    return this.lastName + " " + this.firstName;
};

/**
 * Memberクラスの内容を文字列化します。
 * @return {string}メンバーの氏名
 */
Member.prototype.toString = function(){
    return this.lastName + " " + this.firstName;
};