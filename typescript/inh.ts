class cls1{
	fun1(){
		alert("from class1")
	}
}
class cls2 extends cls1{
	fun2(){
		alert("fom class2")
	}
}
var obj:cls2=new cls2()
obj.fun1()