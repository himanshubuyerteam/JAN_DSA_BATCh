function isValid(str)
{
    const st=[];
    for(let i=0;i<str.length;i++)
    {
        const ch=str[i];
        if(ch=='(' || ch=='[' || ch=='{')
            st.push(ch);
        else
        { //Closing Bracket
            if(st.length==0)
                return false;
            if(ch=='}' && st[st.length-1]!='{')
                return false;
            if(ch==']' && st[st.length-1]!='[')
                return false;
            if(ch==')' && st[st.length-1]!='(')
                return false;
            st.pop();
        }
    }
    if(st.length==0)
        return true;
    else
        return false;
}


function longestValid(str)
{
    let stack=[-1];
    let maxLength=0;
    for(let i=0;i<str.length;i++)
    {
        const ch=str[i];
        if(ch=='(')
            stack.push(i);
        else
        {
            stack.pop();
            if(st.length===0)
                stack.push(i);
            else
            {
                let currLeng=i-stack[stack.length-1];
                maxLength=Math.max(currLeng,maxLength);
            }
        }
    }
    return maxLength;
}


function NGOR_BF(arr)
{
    let ans=new Array(arr.length).fill(-1);
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]>arr[i])
            {
                ans[i]=j;
                break;
            }
        }
    }
    return ans;
}

function NGOR(arr)
{
    let st=[];
    let ans=new Array(arr.length).fill(-1);
    st.push(arr[arr.length-1]);
    ans[arr.length-1]=-1;
    for(let i=arr.length-2;i>=0;i--)
    {
        while(st.length>0 && st[st.length-1]<=arr[i])
            st.pop();
        if(st.length==0)
            ans[i]=-1;
        else
            ans[i]=st[st.length-1];
        st.push(arr[i]);
    }
    return ans;
}


function NSOR(arr)
{
    let st=[];
    let ans=new Array(arr.length).fill(-1);
    st.push(arr[arr.length-1]);
    ans[arr.length-1]=-1;
    for(let i=arr.length-2;i>=0;i--)
    {
        while(st.length>0 && st[st.length-1]>=arr[i])
            st.pop();
        if(st.length==0)
            ans[i]=-1;
        else
            ans[i]=st[st.length-1];
        st.push(arr[i]);
    }
    return ans;
}

function maxArea(arr)
{
    const nsol=NSOL(arr);
    const nsor=NSOR(arr);
    let ans=0;
    for(let i=0;i<arr.length;i++)
    {
        let length=nsor[i]-nsol[i]-1;
        let width=arr[i];
        let area=length*width;
        ans=Math.max(area,ans);
    }
    return ans;
}