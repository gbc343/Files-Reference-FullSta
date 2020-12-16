//var exports=module.exports={};
exports.sum=function(a,b)
{
    return a + b;
};

exports.sub=function(a,b)
{
    return a - b;
};

exports.mul=function(a,b)
{
    return a * b;
};

exports.div=function(a,b)
{
    return a / b;
};

exports.AdditionClass = class {
    constructor(a,b)
    {
        this.a = a;
        this.b = b;
    }

    add()
    {
        return this.a + this.b;
    }
}