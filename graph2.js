canFinish(noOfCourse,preReq)
{
    const indegree = new Array(noOfCourse).fill(0);
    const graph = Array.from({length:noOfCourse},()=>new Array());
    for(const pre of preReq)
    {
        let u = pre[0];
        let v = pre[1];
        graph[u].push(v);
        indegree[v]++;
    }
    const topologicalOrder = [];
    const queue=[];
    for(let i=0;i<indegree.length;i++)
    {
        if(indegree[i]==0)
            queue.add(i);
    }
    while(queue.length>0)
    {
        let fnt = queue.shift();
        topologicalOrder.push(fnt);
        for(let nbr of graph[fnt])
        {
            indegree[nbr]--;
            if(indegree[nbr]==0)
                queue.push(nbr);        
        }
    }
    if(topologicalOrder.size() == noOfCourse)
        return true;
    else
        return false;
}
/*
    for(const pre of preReq)
    {
        const fc = pre[0];
        const sc = pre[1];
        const tc = pre[2];
        graph[sc].push(fc);
        graph[tc].push(sc);

        indegree[fc]++;
        indegree[sc]++;
    }
*/



function alientDict(words)
{
    const graph = Array.from({length:26},()=>new Array());
    const indegree = new Array(26).fill(0);
    const exists = new Array(26).fill(false);

    for(let i=0;i<words.length;i++)
    {
        for(let j=0;i<words[i].length;i++)
        {
            exists[words[i].charAt(j)-97]=true;
        }
    }
    const n = words.length;
    for(let i=0;i<n-1;i++)
    {
        const s1= words[i];
        const s2=words[i+1];

        const len = Math.min(s1.length,s2.length);
        for(let j=0;j<len;j++)
        {
            const c1 = s1.charAt(j);
            const c2 = s2.charAt(j);
            if(c1!=c2)
            {
                const ui = s1.charAt(j)-97;
                const vi = s2.charAt(j)-97;
                graph[ui].push(vi);
                indegree[vi]++;
                break;
            }
        }
    }

    const q=[];
    for(let i=0;i<26;i++)
    {
        if(exists[i]==true && indegree[i]==0)
            q.add(i);
    }

    const topologicalOrder = [];
    while(q.length>0)
    {
        const fnt = q.shift();
        topologicalOrder.push(fnt);

        for(let nbr of graph[fnt])
        {
            indegree[nbr]--;
            if(indegree[nbr]==0)
                q.push(nbr);
        }
    }
    return topologicalOrder.reverse();
} 



function dijkstra(adj, src) {

    let V = adj.length;

    // Min-heap (priority queue) storing pairs of (distance, node)
    let pq = new MinHeap();

    let dist = Array(V).fill(Number.MAX_SAFE_INTEGER);

    // Distance from source to itself is 0
    dist[src] = 0;
    pq.push([0, src]);

    // Process the queue until all reachable vertices are finalized
    while (!pq.isEmpty()) {
        let [d, u] = pq.pop();

        // If this distance not the latest shortest one, skip it
        if (d > dist[u]) continue;

        // Explore all neighbors of the current vertex
        for (let [v, w] of adj[u]) {

            // If we found a shorter path to v through u, update it
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push([dist[v], v]);
            }
        }
    }

    // Return the final shortest distances from the source
    return dist;
}
