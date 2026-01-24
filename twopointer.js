function reverse(arr)
{
    console.log(arr);
    let i=0;
    let j=arr.length-1;
    while(i<j)
    {
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    console.log(arr);
}

function reverse_in_range(arr,s,e)
{
    let i=s;
    let j=e;
    while(i<j)
    {
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
}

function rotate(arr,k)
{
    k=k%arr.length;
    let n=arr.length-1;
    reverse_in_range(arr,0,n);
    reverse_in_range(arr,0,k-1);
    reverse_in_range(arr,k,n-1);

}


function twoSum(arr,tar)
{
    let i=0;
    let j=arr.length-1;
    while(i<j)
    {
        let sum=arr[i]+arr[j];
        if(sum>tar)
            j--;
        else if(sum<tar)
            i++;
        else
        {
            ans.add(i);
            ans.add(j);
            break;
        }
    }
}


function container(arr)
{
    let maxwater=0;
    let i=0;
    let j=arr.length-1;
    while(i<j)
    {
        let height=Math.min(arr[i],arr[j]);
        let width=j-i;
        let currwater=height*width;
        maxwater=Math.max(maxwater,currwater);
        if(arr[i]>arr[j])
            j--;
        else
            i++;
    }
    return maxwater;
}


function sort01(arr)
{
    let i=0;
    let j=0;
    while(i<arr.length)
    {
        if(arr[i]==0)
        {
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            i++;j++;
        }
        else{
            i++;
        }
    }
}

function maxSum(arr,k)
{
    let maxsum=0;
    let currsum=0;
    for(let i=0;i<k;i++)    
        currsum+=arr[i];

    maxsum=currsum;

    for(i=k;i<n;i++)
    {
        currsum=currsum+arr[i]-arr[i-k];
        maxsum=Math.max(maxsum,currsum);
    }
    return maxSum;
}