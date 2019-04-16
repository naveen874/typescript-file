class Addition
{
	n1:number;
	n2:number;
	constructor(n1:number,n2:number)
	{
	this.n1=n1;
	this.n2=n2;
	}
	sum():void
	{
	console.log('sum is:'+(this.n1+this.n2));
	}
}
let ob1=new Addition(10,20);
let ob2=new Addition(100,200);
ob1.sum();
ob2.sum();