class Person
{
    constructor(name)
    {
        this.name = name;
    }

    display()
    {
        console.log(this.name);
    }
}

exports.Person = Person;