function bubbleSort()
{
    let arr=[5,9,8,2,1];
    console.log(arr);
    let noOfElement = arr.length; //5;
    let swapped;
    for(let itt = 1;itt<=noOfElement-1;itt++)
    {
        swapped=false;
        for(let j=0;j<noOfElement-itt;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
                swapped=true;
            }
        }
        if(swapped==false)
        {
            break;
        }
    }
    console.log(arr);
}

function bubbleSort_()
{
    let arr=[5,9,8,2,1];
    console.log(arr);
    let noOfElement = arr.length; //5;
    for(let itt =0;itt<noOfElement-1;itt++)
    {
        for(let j=0;j<noOfElement-itt-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[itt];
                arr[itt]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr);
}


bubbleSort()