//polymorphism         //function overriding
class a
{
        hello()
    {
        
        console.log('i am in base class hello function')
    }
}
class b extends a 
{
    hello()
    {
        
        console.log('i am in derived class hello function')
    }
}
const obj=new(b)
obj.hello()
obj.hello()