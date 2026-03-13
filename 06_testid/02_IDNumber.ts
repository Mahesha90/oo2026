export class IDCode{
    constructor(protected code:string){}

    gender(){
        //(this.code[0]) take the first character of the personal code
        //parseInt conver it to a number
        //if the number is even (divisible by 2), return female
        //if it is odd retun male
        return parseInt(this.code[0])%2===0? "F": "M";
    }
}