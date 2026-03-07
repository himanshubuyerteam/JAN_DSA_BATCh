//Give me 2 Sorted Arrays
// I will return single sorted Array
function merge2SortedArrays(a1,a2)
{
    const s1=a1.length;
    const s2=a2.length;
    const ans=new Array(s1+s2);
    let i=0;
    let j=0;
    let k=0;
    while(i<s1 && j<s2)
    {
        if(a1[i]>a2[j])
            ans[k++]=a2[j++];
        else
            ans[k++]=a1[i++];
    }
    while(i<s1)
        ans[k++]=a1[i++];
    while(j<s2)
        ans[k++]=a2[j++];
    return ans;
}

// let a1=[1,5,8,10];
// let a2=[2,4,6,9,11,15,19,20];

// console.log(merge2SortedArrays(a1,a2));

//unsortedArray startIndx and EndIdx
//return sorted array
function ms_helper(arr,s,e)
{
    if(s===e){
        return [arr[s]];
    }
    // let midx=(s+e)/2;
    const midx=Math.floor((s+e)/2);
    const lsa=ms_helper(arr,s,midx);
    const rsa=ms_helper(arr,midx+1,e);
    const msa=merge2SortedArrays(lsa,rsa);
    return msa;
}
// this is an unsorted Array
//return me sorted Array
function mergeSort(arr)
{
    return ms_helper(arr,0,arr.length-1);
}





function swap(arr,i,j)
{
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function partation(arr,s,e,pi)
{
    let i=s;
    let j=s;

    while(i<=e)
    {
        if(arr[i]<=pi)
        {
            swap(arr,i,j);
            i++;
            j++;
        }
        else
        {
            i++;
        }
    }
    return j-1;
}

function qs_helper(arr,s,e)
{
    if(s>e)
        return;
    let pe=arr[e];
    let pi=partation(arr,s,e,pe);
    qs_helper(arr,s,pi-1);
    qs_helper(arr,pi+1,e);
}
function quickSort(arr)
{
    qs_helper(arr,0,arr.length-1);
}


let a1=[2,7,1,0,44,7,12,9,3];
console.log(a1);
console.log("BEFORE CALLING")
quickSort(a1)
console.log(a1);
console.log("AFTER CALLING")
