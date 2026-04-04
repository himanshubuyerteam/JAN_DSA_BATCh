function size(root)
{
    if(root==null)
        return 0;
    let left_size=size(root.left);
    let right_size=size(root.right);
    return left_size+right_size+1;
}

function sum(root)
{
    if(root==null)
        return 0;
    let left_sum=sum(root.left);
    let right_sum=sum(root.right);
    return left_sum+right_sum+root.val;
}

function minofBST(root)
{
    while(root.left!=null)
        root=root.left;
    return root.val;
}

function maxOfBST(root)
{
    while(root.right!=null)
        root=root.right;
    return root.val;
}

function find(root,key)
{
    if(root==null)
        return false;
    if(root.val==key)
        return true;
    if(root.val>key)
        return find(root.left,key);
    else
        return find(root.right,key);       
}

function LCA(root,a,b)
{
    if(root==null)
        return null;
    if(root.val>a && root.val>b)
        return LCA(root.left,a,b);
    else if(root.val<a && root.val<b)
        return LCA(root.right,a,b);
    else
        return root;
}


class dataObj
{
    constructor(min,max,isBST)
    {
        this.min=min;
        this.max=max;
        this.isBST=isBST;
    }
}

isBSTHelper(root)
{
    if(root==null)
        return new dataObj(Infinity,-Infinity,true);
    const leftObj = isBSTHelper(root.left);
    const rightObj = isBSTHelper(root.right);

    let mymin=Math.min(root.val,Math.min(leftObj.min,rightObj.min));
    let mymax=Math.max(root.val,Math.max(leftObj.max,rightObj.max));

    const c1 = leftObj.max<root.val;
    const c2 = rightObj.min>root.val
    const c3= leftObj.isBST && rightObj.isBST;

    let myisBST = c1 && c2 && c3;

    return new dataObj(mymin,mymax,myisBST);
}

deleteBST(root,key)
{
    if(root==null)
        return null;
    if(root.val>key)
        root.left=deleteBST(root.left,key);
    else if(root.val<key)
        root.right=deleteBST(root.right,key);
    else //root.val==key
    {
        //3 Cases;
        //Case2- If left or right any one is not null
        if(root.left==null || root.right==null)
        {
            return root.left===null?root.right:root.left;
        }
        //Both Exsist

        //Step1 Get the max from left subTree
        let replaceNode = maxOfBST(root.left);
        root.val=replaceNode.val;
        root.left=deleteBST(root.left,replaceNode.val);

        // OR

        // let replaceNode = minofBST(root.right);
        // root.val=replaceNode.val;
        // root.left=deleteBST(root.right,replaceNode.val)
    }
    return root;
}

function insert_in_bst(root,key)
{
    Node n=new Node(key);
    if(root==null)
        return n;
    Node temp=root;
    while(temp!=null)
    {
        if(temp.val<key)
        {
            //Right Insert
            if(temp.right==null)
            {
                temp.right=n;
                return root;
            }
            temp=temp.right;
        }
        else
        {
            //Left Insert
            if(temp.left==null)
            {
                temp.left=n;
                return root;
            }
            temp=temp.left;
        }
    }
    return root;
}