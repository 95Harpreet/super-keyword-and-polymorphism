class a{
    constructor(a,b)
    {
        var c=a+b
        console.log('i am in base class constructor,, Sum is '+c)
    }
}
class b extends a 
{
    constructor()
    {
        super(12,4)
        console.log('i am in derived class constructor')
    }
}
const obj=new(b)