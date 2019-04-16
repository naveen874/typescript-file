var Addition = /** @class */ (function () {
    function Addition(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    Addition.prototype.sum = function () {
        console.log('sum is:' + (this.n1 + this.n2));
    };
    return Addition;
}());
var ob1 = new Addition(10, 20);
var ob2 = new Addition(100, 200);
ob1.sum();
ob2.sum();
