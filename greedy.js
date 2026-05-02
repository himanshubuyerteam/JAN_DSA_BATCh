var canAttendMeetings = function(meetings) {
    meetings.sort((a,b)=>a[0]-b[0]);

    for(let i=1;i<meetings.length;i++)
    {
        if(meetings[i][0]<meetings[i-1][1])
            return false;
    }
    return true;
};
var minMeetingRooms = function(intervals) {
    let st=[];
    let et=[];
    for(let i=0;i<intervals.length;i++)
    {
        st.push(intervals[i][0]);
        et.push(intervals[i][1]);
    }

    st.sort((a,b)=>a-b);
    et.sort((a,b)=>a-b);

    let i=0;
    let j=0;

    let max_room=0;
    let curr_room=0;

    while(i<st.length)
    {
        if(et[j]>st[i])
        {
            curr_room++;
            i++;
        }
        else // st[i]<et[j]
        {
            curr_room--;
            j++;
        }
        max_room=Math.max(max_room,curr_room);
    }
    return max_room;
};


var canCompleteCircuit = function(gas, cost) {
    let tg=0;
    let tc=0;
    for(let i=0;i<gas.length;i++)
        tg+=gas[i];
    for(let i=0;i<cost.length;i++)
        tc+=cost[i];

    if(tg<tc)
        return -1;
    
    let fuel = 0;
    let ans=0;

    for(let i=0;i<gas.length;i++)
    {
        let delta = gas[i]-cost[i];
        fuel+=delta;
        if(fuel<0)
        {
            fuel = 0;
            ans=i+1;
        }
    }
    return ans;
};



// JumpGame1
var canJump = function(nums) {
    let max_reach=0;
    for(let i=0;i<nums.length;i++)
    {
        if(i>max_reach)
            return false;
        max_reach=Math.max(max_reach,nums[i]+i);
        if(max_reach>=nums.length-1)
            return true;
    }
    return true;
};
// Jump Game2
var jump = function(nums) {
    let jump=0;
    let max_reach=0;
    let curr_reach=0;
    for(let i=0;i<nums.length-1;i++)
    {
        max_reach = Math.max(max_reach,nums[i]+i);

        if(i==curr_reach)
        {
            jump++;
            curr_reach = max_reach;
        }

    }
    return jump;
};

// Minimum Number of Taps to Open to Water a Garden
var minTaps = function(n, ranges) {
    // let dp=[];
    let dp = new Array(n+1).fill(0);

    for(let i=0;i<ranges.length;i++)
    {
        let left_range = Math.max(0,i-ranges[i]);
        let right_range = Math.min(n,i+ranges[i]);
        dp[left_range]=Math.max(dp[left_range],right_range);
    }

    let tap=0;
    let max_reach=0;
    let curr_reach=0;
    for(let i=0;i<=n;i++)
    {
        if(i>max_reach)
            return -1;
        if(i>curr_reach)
        {
            tap++;
            curr_reach=max_reach;
        }
        max_reach=Math.max(max_reach,dp[i]);
    }
    return tap;
};

