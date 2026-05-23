function dfs(i,j,grid)
{
    // vis[i][j]=true;
    grid[i][j]='0';
    let [][]dir = [[1,0],[0,1],[-1,0],[0,-1]];
    for(let []arr:dir)
    {
        let ni = i+arr[0];
        let nj = j+arr[1];
        if(isValid(ni,nj,grid) && grid[i][j]==1)
        {
            return 1+ dfs(ni,nj,grid);
        }
    }
}
function noOfIsland(grid)
{
    let c=0;
    let maxArea = 0;
    // let vis = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(false));
    for(let i=0;i<grid.length;i++)
    {
        for(let j=0;j<grid[0].length;j++)
        {
            if(grid[i][j]==1)
            {
                c++;
                maxArea = Math.max(maxArea, dfs(i,j,grid));
                // dfs(i,j,vis,grid);
                dfs(i,j,grid);
            }
        }
    }
    return maxArea;
}



function isValid(ni,nj,grid)
{
    if(ni<0 || nj<0 || ni>=grid.length || nj>=grid[0].length)
        return false;
    return true;
}



class organe
{
    constructor(i,j,time)
    {
        this.i=i;
        this.j=j;
        this.time=time;
    }
}

function rottenOrnge(grid)
{
    let fc=0;
    let rc=0;
    let ec=0;
    let q=[];
    for(let i=0;i<grid.length;i++)
    {
        for(let j=0;j<grid[0].length;j++)
        {
            if(grid[i][j]==1)
            {
                fc++;
            }
            else if(grid[i][j]==0)
            {
                ec++;
            }
            else
            {
                rc++;
                let orobj = new organe(i,j,0);
                q.push(orobj);
                grid[i][j]=2;
               
            }
        }
    }
    if(fc==0)
        return 0;

    let dir = [[1,0],[0,1],[-1,0],[0,-1]];
    let ans = 0;
    while(q.length>0)
    {
        let fnt = q.shift();
        ans = Math.max(ans,fnt.time);
        for(let []d:dir)
        {
            let ni = fnt.i+d[0];
            let nj = fnt.j+d[1];
            if(isValid(ni,nj,grid) && grid[ni][nj]==1)
            {
                grid[ni][nj]=2;
                q.add(new organe(ni,nj,fnt.time+1));
                fc--;
            }
        }
    }
    // return ans;
    if(fc==0)
        return ans;
    else    
        return -1;
}