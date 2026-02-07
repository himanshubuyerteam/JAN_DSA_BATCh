// function f1()
// {
//     console.log("HELLO")
//     f2();
//     console.log("BYE")
// }

// function f2()
// {
//     console.log("HELLO Again")
//     f3();
//     console.log("BYE Again")
// }

// function f3()
// {
//     console.log("A")
//     console.log("B")
// }

// f1()


function pd(n)
{
    if(n==0)
        return;
    console.log(n);
    pd(n-1);
}

// pi(5);
function pi(n)
{
    if(n==0)
        return;
    pi(n-1);
    console.log(n);
}


function fact(n)
{
    if(n==0)
        return 1;
    let rans=fact(n-1);
    let myans=rans*n;
    return myans;
}

// console.log(fact(6));

function fib(n)
{
    if(n==0)
        return 0;
    if(n==1)
        return 1;
    let ra1=fib(n-1);
    let ra2=fib(n-2);
    return ra1+ra2;
}


function prod(a,b)
{
    if(a==1)
        return b;
    let rans=prod(a-1,b);
    let myans=rans+b;
    return myans;
}


function pow(a,x)
{
    if(x==1)
        return a;
    let rans=pow(a,x-1);
    let myans=rans*a;
    return myans;
}


function pow_better(a,x)
{
    if(x==1)
        return a;
    let rans=pow_better(a,x/2);
    let myans=rans*rans;
    if(x%2==1)
        myans=myans*a;
    return myans;
}


function stairCase(n)
{
    if(n==0)
        return 1;
    if(n==1)
        return 1;
    let ra1=stairCase(n-1);
    let ra2=stairCase(n-2);
    // let ra3=stairCase(n-3);
    // myans=ra1+ra2+ra3
    let myans=ra1+ra2;
    return myans;
}

function mazePath(sr,sc,dr,dc)
{
    if(sr==dr && sc==dc)
        return 1;
    if(sr>dr || sc>dc)
        return 0;
    let ra1=mazePath(sr+1,sc,dr,dc);
    let ra2=mazePath(sr,sc+1,dr,dc);
    let myans=ra1+ra2;
    return myans;
}

function mazePath_path(sr,sc,dr,dc,path="")
{
    if(sr==dr && sc==dc)
    {
        console.log(path);
        return 1;
    }
    if(sr>dr || sc>dc)
        return 0;
    let ra1=mazePath_path(sr+1,sc,dr,dc,path+"D");
    let ra2=mazePath_path(sr,sc+1,dr,dc,path+"R");
    let myans=ra1+ra2;
    return myans;
}
let ans= mazePath_path(0,0,2,2);
console.log(ans);
// mazePath(0,0,1,1)