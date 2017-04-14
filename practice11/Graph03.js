/**
 * Created by cuiwujie on 2017/4/8.
 * 图：
 *
 * 由边的集合和顶点的集合组成。
 * 边由顶点对（v1,v2）定义
 * 顶点也有权重，也称之为成本
 *
 * 有向图
 *
 * 有直线箭头 表示  有方向
 * 无向图  无序图
 *用直线 表示  无方向
 *
 * 图中一系列顶点构成路径，路径中所有顶点都由边链接。路径的长度用路径中的第一个顶点到最后一个顶点之间的变得数量来表示。
 *
 * 点强连通   图强连通
 *
 * 二维数组
 *
 *
 * 搜索图：
 * 深度优先搜索
 *
 （1）访问顶点v；
 （2）依次从v的未被访问的邻接点出发，对图进行深度优先遍历；直至图中和v有路径相通的顶点都被访问；
 （3）若此时图中尚有顶点未被访问，则从一个未被访问的顶点出发，重新进行深度优先遍历，直到图中所有顶点均被访问过为止。
 *
 *广度优先搜索
 *
 *1、把根节点放到队列的末尾。
 2、每次从队列的头部取出一个元素，查看这个元素所有的下一级元素，把它们放到队列的末尾。并把这个元素记为它下一级元素的前驱。
 3、找到所要找的元素时结束程序。
 4、如果遍历整个树还没有找到，结束程序。[1]
 *
 *
 * 搜索没有实现 呢
 */

// 构建图
function Graph(v){
    this.vertices=v;
    this.vertexList=[];
    this.edges=0;
    this.adj=[];
    for(var i=0;i<this.vertices;i++){
        this.adj[i]= [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.toString = toString ;
    this.showGraph = showGraph;
    this.marked=[];
    for(var i=0;i<this.vertices;i++){
        this.marked[i]=false;
    }
    this.edgeTo = [];
    //深度优先搜索
    this.dfs=dfs;
    //广度优先搜索
    this.bfs=bfs;

    this.pathTo=pathTo;
    this.hashPathTo = hashPathTo;

    this.topSort=topSort;
    this.topSortHelper=topSortHelper;

}
function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
function showGraph(){
    var visited=[];
    for(var i=0;i<this.vertices;i++){
        visited.push(this.vertexList[i]);
        for(var j=0;j<this.vertices;j++){
            if(this.adj[i][j]!=undefined){
                if(visited.indexof(this.vertexList[j])<0){
                    console.log(i+"->"+this.adj[i][j]+ ' ');
                }

            }
        }
        visited.pop();
    }
}
function dfs(v){
    this.marked[v] = true;
    //if语句在这里不是必须的
    if(this.adj[v] != undefined){
        console.log("Visited vertex: " + v );
        for (var w in this.adj[v]){
            if(!this.marked[w]){
                this.dfs(w);
            }
        }
    }
}
function bfs(s){
    var queue = [];
    this.marked = true;
    queue.push(s);//添加到队尾

    while(queue.length>0){
        var v = queue.shift();//从队首移除
        if(v == undefined){
            console.log("Visited vertex: " + v);
        }
        for (var w in this.adj[v]){
            if(!this.marked[w]){
                this.edges[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}
function pathTo(v){
    var source = 0;
    if(!this.hashPathTo(v)){
        return undefined;
    }
    var path = [];
    for(var i=v;i!=source;i=this.edgeTo[i]){
        path.push(i);
    }
    path.push(source);
    return path;
}
function hashPathTo(v){
    return this.marked[v];
}
//topSort()函数
function topSort(){
    var stack = [];
    var visited = [];
    for(var i =0;i<this.vertices;i++){
        visited[i] = false;
    }
    for(var i = 0;i<this.vertices;i++){
        if(visited[i] == false){
            this.topSortHelper(i,visited,stack);
        }
    }
    for(var i = 0;i<stack.length;i++){
        if(stack[i] !=undefined && stack[i] != false){
            print(this.vertexList[stack[i]]);
        }
    }
}

//topSortHelper()函数
function topSortHelper(v,visited,stack){
    visited[v] = true;
    for (var w in this.adj[v]){
        if(!visited[w]){
            this.topSortHelper(visited[w],visited,stack);
        }
    }
    stack.push(v);
}



g=new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
var vertex  =4;
var paths = g.pathTo(vertex);
console.log('111',paths);



