//use of super keyword to initialize a constructor(single level inheritance)
class a{
    constructor()
    {
        console.log('i am in base class constructor')
    }
}
class b extends a 
{
    constructor()
    {
        super()
        console.log('i am in derived class constructor')
    }
}
const obj=new(b)