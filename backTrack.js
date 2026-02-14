//sr- Source Row
// sc- Source Col
// DR-destination Row
// DC- Destination Col
function ratInMaze(arr)
{
    let n=arr.length;
    let sr=0
    let sc=0;
    let dr=n-1;
    let dc=n-1;
    let ans=[];
    // let dir=[[-1,0],[0,1],[1,0],[0,-1]];
    // let dirPath=["U","R","D","L"];
    helper_ratInMaze(arr,sr,sc,dr,dc,"",ans);
    return ans;
}
function helper_ratInMaze(arr,sr,sc,dr,dc,path,ans)
{
    if(sr>arr.length-1 || sc>arr.length-1 || sr<0 || sc<0 || arr[sr][sc]==0)
        return;
    if(sr==dr && sc==dc)
    {
        ans.push(path);
        return;
    }
    //Mark Visited
    arr[sr][sc]=0;

    helper_ratInMaze(arr,sr-1,sc,dr,dc,path+"U",ans);
    helper_ratInMaze(arr,sr,sc+1,dr,dc,path+"R",ans);
    helper_ratInMaze(arr,sr+1,sc,dr,dc,path+"D",ans);
    helper_ratInMaze(arr,sr,sc-1,dr,dc,path+"L",ans);



    //BackTracking
    arr[sr][sc]=1;
}


// let arr=[[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]
let arr=[[1,1,0],[0,1,0],[0,1,1]]

let abc = ratInMaze(arr);
// console.log(abc)


// ["ABC","BCA","CAB"];

function permutation(str)
{
    let ans=[];
    let strarray=str.split('');
    helper_permutation(strarray,ans,0);
    return ans;
}

function helper_permutation(str,ans,idx)
{
    if(idx==str.length)
    {
        ans.push(str.join(''));
        // ans.push(str);
        return;
    }

    for(let i=idx;i<str.length;i++)
    {
        swap(str,idx,i);
        helper_permutation(str,ans,idx+1);
        swap(str,i,idx);
    }
}

function swap(str,i,j)
{
    let temp=str[i];
    str[i]=str[j];
    str[j]=temp;
}

let ans = permutation("ABC");

console.log(ans);



function nqueen(tqueen,arr,ans,row)
{
    if(row==tqueen)
    {
        console.log(ans);
        return;
    }
    for(let col=0;col<tqueen;col++)
    {
        if(isPossible(arr,row,col))
        {
            ans[row][col]='Q';
            nqueen(tqueen,arr,ans,row+1);
            ans[row][col]='.';
        }
    }
}

function isPossible(arr,row,col)
{
    //col check
    for(let i=0;i<row;i++)
    {
        if(arr[i][col]=='Q')
            return false;
    }
    //row check

    for(let i=0;i<col;i++)
    {
        if(arr[row][i]=='Q')
            return false;
    }

    //left diagonal check
    // for(let i=0,j=0;i<row && j<col;j++,i++)
    // {
    //     if(arr[i][j]=='Q')
    //         return false;
    // }

    for(let i=row-1,j=col-1;i>0 && j>0 ;i--,j--)
    {
        if(arr[i][j]=='Q')
            return false;
    }


    //right diagonal check
    for(let i=row-1,j=col+1;i>0 && j>0 ;i--,j++)
    {
        if(arr[i][j]=='Q')
            return false;
    }

    return true;
    //left diagonal


    
}