var Atm = /** @class */ (function () {
    function Atm() {
    }
    //2.functions
    Atm.prototype.balenq = function (acc) {
        console.log(this.acname + "account balence" + acc + "rupess");
    };
    Atm.prototype.deposit = function (rupees) {
        console.log(this.acname + "deposited" + rupees + "rupees");
    };
    Atm.prototype.withdraw = function (rupess) {
        console.log(this.acname + "withdrawn" + rupees + "rupees");
    };
    Atm.prototype.showdata = function () {
        console.log('account holder name=' + this.acname);
        console.log('account number=' + this.acno);
        console.log('balence amount in account is:' + this.amount);
    };
    return Atm;
}());
//3.object creation
var h1 = new Atm();
//accessing data
h1.acname = "naveen";
h1.acno = 621620535;
h1.amount = 15000;
//accessing functions
h1.showdata();
h.baleng(15000);
h1.diposit(10000);
h1.withdrawn(5000);
