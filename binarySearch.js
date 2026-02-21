function binarySearch(arr,key)
{
    let s=0;
    let e=arr.length-1;
    while(s<=e)
    {
        let midx=(s+e)/2;
        let mval=arr[midx];
        if(mval==key)   return true;
        else if(mval>key) e=midx-1;
        else s=midx+1;
    }
    return false;
}

function firstOcc(arr,key)
{
    let s=0;
    let e=arr.length-1;
    let ans=-1;
    while(s<=e)
    {
        let midx=(s+e)/2;
        let mval=arr[midx];
        if(mval==key)
        {
            ans=midx;
            e=midx-1;
        }
        else if(mval>key) e=midx-1;
        else s=midx+1;
    }
    return ans;
}


function lastOcc(arr,key)
{
    let s=0;
    let e=arr.length-1;
    let ans=-1;
    while(s<=e)
    {
        let midx=(s+e)/2;
        let mval=arr[midx];
        if(mval==key)
        {
            ans=midx;
            s=midx+1;
        }
        else if(mval>key) e=midx-1;
        else s=midx+1;
    }
    return ans;
}



function countOcc(arr,key)
{
    let fo=firstOcc(arr,key)
    let lo=lastOcc(arr,key)
    return lo-fo+1; 
}


function minInRSA(arr)
{
    let s=0;
    let e=arr.length-1;

    while(s<e)
    {
        let midx=(s+e)/2;
        let mval=arr[midx];
        if(mval>arr[e])
        {
            s=midx+1;
        }
        else
        {
            e=midx-1;
        }
    }
    return arr[e];
}

function noOfRotation(arr)
{
    let s=0;
    let e=arr.length-1;

    while(s<e)
    {
        let midx=(s+e)/2;
        let mval=arr[midx];
        if(mval>arr[e])
        {
            s=midx+1;
        }
        else
        {
            e=midx-1;
        }
    }
    // return arr[e];
    return e;
}

function binarySearchSA(arr,key,s,e)
{
    while(s<=e)
    {
        let midx=(s+e)/2;
        let mval=arr[midx];
        if(mval==key)   return midx;
        else if(mval>key) e=midx-1;
        else s=midx+1;
    }
    return -1;
}

function searchInRSA(arr,key)
{
    let noOfRotation = noOfRotation(arr);
    let ans = binarySearchSA(arr,key,0,noOfRotation-1);
    if(ans==-1)
        return binarySearchSA(arr,key,noOfRotation,arr.length-1);
    return ans;
}


function kokoEating(arr,h)
{
    let min=1;
    let max=1;
    let ans=-1;
    for(let i=0;i<arr.length;i++)
        max=Math.max(max,arr[i]);

    while(min<=max)
    {
        let mid_speed=(max+min)/2;

        if(isPossible(arr,h,mid_speed))
        {   
            ans=mid_speed;
            e=mid_speed-1;
        }
        else
        {
            s=mid_speed+1;
        }
    }
    return ans;
}

function isPossible(arr,h,speed)
{
    let hour_used=0;
    for(let i=0;i<arr.length;i++)
    {
        let hour_each_time=Math.ceil(arr[i]/speed);
        hour_used+=hour_each_time;
    }
    if(hour_used<=h)
        return true;
    else
        return false;
}