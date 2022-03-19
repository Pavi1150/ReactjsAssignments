let a=14;
let flag=true;
if(a>1)
{
    for(i=2;i<a;i++)
    {
        if(a%i==0)
        {
            flag=false
        }
    }
    if(flag)
    {
        console.log("The number is prime")
    }
    else
    {
        console.log("The number is not prime")
    }
}if(a==1)
    {
        console.log("The number is neither prime nor composite")
    }
