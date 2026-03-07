class Node
{
    constructor(val)
    {
        this.val=val;
        this.next=null;
    }
}
function printLL(head)
{
    while(head!=null)
    {
        console.log(head.val);
        head=head.next;
    }
}

function sizeOfLL(head)
{
    let size=0;
    while(head!=null)
    {
        size++;
        head=head.next;
    }
    return size;
}


function reverse(head)
{
    let curr=head;
    let prev=null;
    while(curr!=null)
    {
        let fwd=curr.next;  //saving te future
        curr.next=prev; // breaking old connection and making new
        prev=curr;
        curr=fwd;
    }
    return prev;
}

//Second Middle Even Case
function middleNode_second(head)
{
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}
//Even-First Middle
function middleNode_first(head)
{
    let slow=head;
    let fast=head;
    while(fast.next!=null && fast.next.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}

function isPalidrome(head)
{
    let mid = middleNode_first(head);
    let ll2=mid.next;
    mid.next=null;

    let reversell2=reverse(ll2);

    while(reversell2!=null && head!=null)
    {
        if(reversell2.val!=head.val)
            return false;
        reversell2=reversell2.next;
        head=head.next;
    }
    return true;
}

function foldLL(head)
{
    let ll1=head
    let mid=middleNode_first(ll1);
    let ll2=mid.next;
    mid.next=null;

    ll2=reverse(ll2);
    let f1, f2;
    while(ll1!=null && ll2!=null)
    {
        f1=ll1.next;
        f2=ll2.next;

        ll1.next=ll2;
        ll2.next=f1;

        ll1=f1;
        ll2=f2;
    }
}

function isCycle(head)
{
    let fast=head;
    let slow=head;
    while(fast!=null && fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast)
            return true;
    }
    return false;
}


function meetingNode(head)
{
    let fast=head;
    let slow=head;
    while(fast!=null && fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast)
            return slow;
    }
    return null;
}

function startingNode(head)
{
    let slow = meetingNode(head);
    let lengthOfTail=0;
    let temp=head;
    while(temp!=meetingNode)
    {
        temp=temp.next;
        slow=slow.next;
        lengthOfTail++;
    }
    return temp;
}
let n1=new Node(10);
let n2=new Node(20);
let n3=new Node(30);
let n4=new Node(40);
n1.next=n2;
n2.next=n3;
n3.next=n4;
printLL(n1);
let ans= sizeOfLL(n2);
console.log("SIZE OF LL IS",ans);

