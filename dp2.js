.
function tss_rec(arr,idx,tar)
{

    if(tar==0)
        return true;
    if(idx>arr.length)
        return false;
    let ans1=false;
    if(tar-arr[idx]>=0)
        ans1 = tss_rec(arr,idx+1,tar-arr[idx]);
    let ans2 = tss_rec(arr,idx+1,tar);
    return ans1 || ans2 ;
}

function tss_tab(arr,idx,tar,dp)
{

    if(tar==0)
        return true;
    if(idx>arr.length)
        return false;
    if(dp[idx][tar]!=-1)
    {
        if(dp[idx][tar]==1)
            return true;
        else
            return false;
    }
    let ans1=false;
    if(tar-arr[idx]>=0)
        ans1 = tss_rec(arr,idx+1,tar-arr[idx],dp);
    let ans2 = tss_rec(arr,idx+1,tar,dp);
    let fans = ans1 || ans2
    if(fans==true)
        dp[idx][tar]=1;
    else
        dp[idx][tar]=0;
    return fans;
}

function tss(arr,tar)
{   
    // return tss_rec(arr,0,tar);
    let dp = Array.from({length:arr.length+1},()=>new Array(tar+1).fill(-1)); 
}

function KnakSack_rec(wt,val,maxwt,idx,dp)
{
    if(maxwt==0)
        return 0;
    if(idx==wt.length)
        return 0;
    if(dp[idx][maxwt]!=-1)
        return dp[idx][maxwt];
    let op1= KnakSack(wt,val,maxwt,idx+1,dp);
    let op2=0;
    if(wt[idx]<=maxwt)
        op2=val[idx]+KnakSack(wt,val,maxwt-wt[idx],idx,dp);
    let myans=Math.max(op1,op2);
    dp[idx][maxwt]=myans;
    return myans;
}
function KnakSack(wt,val,mxwt)
{
    let dp = Array.from({length:arr.length+1},()=>new Array(tar+1).fill(-1)); 
    return KnakSack_rec(wt,val,mxwt,idx);
}