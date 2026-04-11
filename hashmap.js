let map=new Map();

// map.set("A",10);
// map.set("B",10);
// map.set("A",100);

// console.log(map.get("A"));
// console.log(map.get("B"));

// console.log(map.has("A"))
// console.log(map.has("C"))

// console.log("HAS a Key")
// console.log(map.has("A"))
// //Deleted the Key
// map.delete("A");
// console.log("HAS a Key")
// console.log(map.has("A"))


// console.log(map.size);
// map.clear();
// console.log(map.size);



// map.set("a",10);
// map.set("b",20);
// map.set("c",30);
// map.set("d",40);
// map.set("e",50);
map.set(1,10)
map.set(2,10)
map.set(3,10)
map.set(4,10)

map.delete(2);

console.log(map.get("a"));

for(let a of map.keys()){
    console.log(a);
}


for(let b of map.values()){
    console.log(b);
}


function isZeroSumSubArray(arr)
{
    let map=new Map();
    let sum=0;
    map.set(sum,true);
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
        if(map.has(sum))
            return true;
        else
            map.set(sum,true);
    }
    return false;
}

function countZeroSubArray(arr)
{
    let map=new Map();
    let sum=0;
    map.set(sum,1);
    let c=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
        if(map.has(sum)){
            c=c+map.get(sum);
            map.set(sum,map.get(sum)+1);
        }
        else{
            map.set(sum,1);
        }
    }
    return c;
}

function longestSubArraySumZero(arr)
{
    let map=new Map();
    let sum=0;
    map.set(sum,-1);
    let maxLen=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
        if(map.has(sum)){
            let possiblans=i-map.get(sum);
            maxLen=Math.max(possiblans,maxLen);
        }
        else{
            map.set(sum,i);
        }
    }
    return maxLen;
}

function isAnagram(s1,s2)
{
    if(s1.length()!=s2.length())
        return false;
    let map=new Map();

    for(let ch of s1){
        map.set(ch,(map.get(ch)??0)+1);
    }

    for(let ch of s2){
        map.set(ch,(map.get(ch)??0)-1);
    }

    for(let val of map.values()){
        if(val!=0)
            return false;
    }

    //OR
    for(let key of map.keys()){
        if(map.get(key)!=0)
            return false;
    }
    return true;
}

var numRabbits = function(arr) {
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],(map.get(arr[i])??0)+1);
    }

    let c=0;
    for(let key of map.keys()){
        let grp_size=key+1;
        let no_of_grp=Math.ceil(map.get(key)/grp_size);
        c+=(grp_size*no_of_grp)
    }
    return c;
};