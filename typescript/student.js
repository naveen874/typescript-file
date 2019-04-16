var Student = /** @class */ (function () {
    //2.data initialization
    function Student(id, name, s1, s2, s3) {
        this.id = id;
        this.name = name;
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }
    //3.data processing
    Student.prototype.showdata = function () {
        console.log(this.id + this.name + this.s1 + this.s2 + this.s3);
    };
    Student.prototype.total = function () {
        return this.s1 + this.s2 + this.s3;
    };
    Student.prototype.avg = function () {
        return (this.s1 + this.s2 + this.s3) / 3;
    };
    return Student;
}());
var ob1 = new Student(619, "naveen", 88, 77, 99);
ob1.showdata();
console.log(this.s1 + this.s2 + this.s3);
console.log(this.s1 + this.s2 + this.s3);
