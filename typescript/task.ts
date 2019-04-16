class Atm
{
//1.data
acname:string;
acno:number;
amount:number;
//2.functions
balenq(acc:number):void
{
console.log(this.acname+"account balence"+acc+"rupess");
}
deposit(rupees:number):void
{
console.log(this.acname+"deposited"+rupees+"rupees");
}
withdraw(rupess:number):void
{
console.log(this.acname+"withdrawn"+rupees+"rupees");
}
showdata():void
{
console.log('account holder name='+this.acname);
console.log('account number='+this.acno);
console.log('balence amount in account is:'+this.amount);
}
}
//3.object creation
let h1=new Atm()
//accessing data
h1.acname="naveen";
h1.acno=621620535;
h1.amount=15000;
//accessing functions
h1.showdata();
h.baleng(15000);
h1.diposit(10000);
h1.withdrawn(5000);


