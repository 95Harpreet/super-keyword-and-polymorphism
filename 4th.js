//solution for function overriding
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
const obj1=new(b)
const obj2=new(a)

for (var s of [obj1,obj2])
{
    s.hello()
}

