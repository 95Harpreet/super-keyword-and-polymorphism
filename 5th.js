//2nd sol. to function overriding
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
function testing(call)
{
    call.hello()

}
const obj=new a()
const obj1=new b()

testing(obj)