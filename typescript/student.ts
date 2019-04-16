class Student
{
    //1.data declaration
    id:number;
    name:"string";
    s1:number;
    s2:number;
    s3:number;
    //2.data initialization
    constructor(id:number,name:string,s1:number,s2:number,s3:number)
    {
        this.id=id;
        this.name=name;
        this.s1=s1;
        this.s2=s2;
        this.s3=s3;
    }
    //3.data processing
    showdata():void
    {
        console.log(this.id+this.name+this.s1+this.s2+this.s3)
    }
    total():number
    {
        return this.s1+this.s2+this.s3
    }
    avg():number
    {
        return (this.s1+this.s2+this.s3)/3
    }
}
let ob1=new Student(619,"naveen",88,77,99)
ob1.showdata();
console.log(this.s1+this.s2+this.s3);
console.log(this.s1+this.s2+this.s3);