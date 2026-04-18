function fib(n)
{
    if(n<=2)
        return n-1;
    console.log("Calculating Fib of "+n);
    let ra1=fib(n-1);
    let ra2=fib(n-2);
    return ra1+ra2;
}

function fib_memo(n,arr)
{
    if(n<=2)
        return n-1;
    if(arr[n]!=-1)
        return arr[n];
    console.log("Calculating Fib of "+n);
    let ra1=fib_memo(n-1,arr);
    let ra2=fib_memo(n-2,arr);
    return arr[n]=ra1+ra2;
}

function fib_tab(n)
{
    let arr=new Array(n+1).fill(-1);
    arr[0]=0;
    arr[1]=1;
    for(let i=2;i<arr.length;i++)
        arr[i]=arr[i-1]+arr[i-2];
    return arr[n];
}

let n=10;
// let ans=fib(n);
// console.log(ans);

let arr=new Array(11);
arr.fill(-1);
console.log(fib_memo(n,arr));

var fib = function(n) {
    let arr= new Array(n+1).fill(-1);

    function solve(n)
    {
        if(n==0 || n==1)
            return n;
        if(arr[n]!=-1)
            return arr[n];
        let ra1=solve(n-1);
        let ra2=solve(n-2);
        let myans=ra1+ra2;
        arr[n]=myans;
        return myans;
    }
    return solve(n);
};


//Source Row, Source Col, Dest Row, Dest Col
function maze_Path_rec(sr,sc,dr,dc)
{
    if(sr==dr && sc==dc)
        return 1;
    if(sr>dr || sc>dc)  
        return 0;
    let ra1= maze_Path_rec(sr+1,sc,dr,dc);
    let ra2= maze_Path_rec(sr,sc+1,dr,dc);
    let mans= ra1+ra2;
    return mans;
}
function minCost(sr,sc,dr,dc)
{
    if(sr==dr && sc==dc)
        return arr[sr][sc];
    if(sr>dr || sc>dc)  
        return Infinity;
    let ra1= minCost(sr+1,sc,dr,dc);
    let ra2= minCost(sr,sc+1,dr,dc);
    // let mans= ra1+ra2;
    let mans=Math.min(ra1,ra2)+arr[sr][sc];
    return mans;
}

function maze_Path_memo(sr,sc,dr,dc,arr)
{
    if(sr==dr && sc==dc)
        return 1;
    if(sr>dr || sc>dc)  
        return 0;
    if(arr[sr][sc]!=-1)
        return arr[sr][sc];
    let ra1= maze_Path_memo(sr+1,sc,dr,dc,arr);
    let ra2= maze_Path_memo(sr,sc+1,dr,dc,arr);
    let mans= ra1+ra2;
    return arr[sr][sc]=mans;
}

function maze_path_tab(m,n)
{

}


function minCost_tab(arr)
{
    let n=arr.length;
    let m=arr[0].length;

    let dp = Array.from({ length: n }, () => new Array(m).fill(-1));

    for(let i=n-1;i>=0;i--)
    {
        for(let j=m-1;j>=0;j--)
        {
            //Corner Cell
            if(i==n-1 && j==m-1)
                dp[i][j]=arr[i][j];
            //Last Row
            else if(i==n-1)
                dp[i][j]=arr[i][j]+dp[i][j+1];
            //Last Col
            else if(j==m-1)
                dp[i][j]=arr[i][j]+dp[i+1][j];
            else
                dp[i][j]=Math.min(dp[i][j+1],dp[i+1][j])+arr[i][j];
        }
    }
    return dp[0][0];

    

}