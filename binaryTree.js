function size(root)
{
    if(root==null)
        return 0;
    let lc=size(root.left);
    let rc=size(root.right);
    let mc=lc+rc+1;
    return mc;
}


function sum(root)
{
    if(root==null)
        return 0;
    let ls=size(root.left);
    let rs=size(root.right);
    let ms=ls+rs+root.val;
    return ms;
}

function maximum(root)
{
    if(root==null)
        return (-1)*Infinity;
    let lm=maximum(root.left);
    let rm=maximum(root.right);
    let ms=Math.max(lm,Math.max(rm,root.val));
    return ms;
}


function minimum(root)
{
    if(root==null)
        return Infinity;
    let lm=minimum(root.left);
    let rm=minimum(root.right);
    let ms=Math.min(lm,Math.min(rm,root.val));
    return ms;
}

//Edges
function height(root)
{
    if(root==null)
        return -1;
    let lh=height(root.left);
    let rh=height(root.right);
    let mh=1+Math.max(lh,rh);
    return mh;
}
//Nodes
function height(root)
{
    if(root==null)
        return 0;
    let lh=height(root.left);
    let rh=height(root.right);
    let mh=1+Math.max(lh,rh);
    return mh;
}


function preorder(root)
{
    if(root==null)
        return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

function inorder(root)
{
    if(root==null)
        return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

function postorder(root)
{
    if(root==null)
        return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}


function levelOrder(root)
{
    let q=[];
    q.add(root);
    while(q.size()>0)
    {
        let curr=q.unshift();
        console.log(curr.val);
        if(curr.left!=null)
            q.add(curr.left);
        if(curr.right!=null)
            q.add(curr.right);
    }
}

function levelOrderLineByLine(root)
{
    let ans=[];
    let q=[];
    q.add(root);
    while(q.size()>0)
    {
        let s=q.size();
        let small=[];
        while(s-->0)
        {
            let curr=q.unshift();
            // console.log(curr.val);
            small.add(curr.val);
            if(curr.left!=null)
                q.add(curr.left);
            if(curr.right!=null)
                q.add(curr.right);
        }
        ans.add(small); 
    }
}


function search(root,key)
{
    if(root==null)
        return false;
    let lans=search(root.left,key);
    let rans=search(root.right,key);
    if(lans || rans || root.val==key)
        return true;
    else
        return false;
}
let path=[]
function nodeToRoot(root,key)
{
    if(root==null)
        return false;
    let lans=search(root.left,key);
    let rans=search(root.right,key);
    if(lans || rans || root.val==key){
        path.add(root.val);
        return true;
    }  
    else
        return false;
}


function find_in_BT(root,key)
{
    if(root==null)
        return false;
    if(root.val==key)
        return true;
    let left_ans=find_in_BT(root.left,key);
    let right_ans=find_in_BT(root.right,key);
    return right_ans || left_ans;
}
//Node to Root
function path_in_BT(root,key,path)
{
    if(root==null)
        return false;
    if(root.val==key)
    {
        path.add(root);
        return true;
    }
    let left_ans=find_in_BT(root.left,key);
    let right_ans=find_in_BT(root.right,key);
    let mans= right_ans || left_ans;
    if(mans==true)
    {
        path.add(root);
        return mans;
    }
    else
        return false;
}


function LCA(root,a,b)
{
    let path1=path_in_BT(root,a,[]);
    let path2=path_in_BT(root,b,[]);

    //Op1 Reverse path1 and path2
    //First Same Element is the Ans

    let i=0;
    // let j=0;
    while(i<Math.min(path1.length,path2.length))
    {
        if(path1[i]!=path2[i])
            i++;
        else
            return path1[i];
    }
}