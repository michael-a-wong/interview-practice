class Graph {
    constructor(vertices) {
        this.vertices = vertices; 
        this.adList = new Array(vertices);
        for (var i = 0; i < vertices; i++) {
            this.adList[i] = []; 
        }
    }

    addEdge(v, w) {
        if (v < this.vertices && w < this.vertices) {
            this.adList[v].push(w); 
        }
        else {
            console.log("ERROR: vertices is out of bounds"); 
        }
    }

    dfs(start) {

        var visited = new Array(this.vertices);
        visited.fill(false);  

        function recDfs(vertex) {
            visited[vertex] = true; 

            console.log(`vertex ${vertex}`); 
            for (var i = 0; i < this.adList[vertex].length; i++) {
                if (!visited[this.adList[vertex][i]]) {
                    visited[this.adList[vertex][i]] = true; 
                    recDfs(this.adList[vertex][i]); 
                }
            }
        }

        recDfs = recDfs.bind(this); 
        recDfs(start); 

    }

    iterDFS(start) {

        var stack = [start]; 
        var visited = new Array(this.vertices); 
        visited.fill(false); 

        while (stack.length > 0) {

            var vertex = stack.pop(); 
            visited[vertex] = true; 

            console.log(`vertex ${vertex}`); 
            for (var i = 0; i < this.adList[vertex].length; i++) {
                if (!visited[this.adList[vertex][i]] ) {
                    visited[this.adList[vertex][i]] = true; 
                    stack.push(this.adList[vertex][i]); 
                }
            }

        }
        
    }

    print() {
        console.log(this.adList); 
    }
}

// var g = new Graph(4); 
// g.addEdge(0, 1); 
// g.addEdge(0, 2); 
// g.addEdge(1, 2); 
// g.addEdge(2, 0); 
// g.addEdge(2, 3); 
// g.addEdge(3, 3);

// g.dfs(2); 

var g = new Graph(6); 
g.addEdge(0, 1); 
g.addEdge(0, 2); 
g.addEdge(1, 3); 
g.addEdge(1, 4); 
g.addEdge(2, 4); 
g.addEdge(3, 4); 
g.addEdge(3, 5); 
g.addEdge(4, 5);
g.addEdge(1, 0); 
g.addEdge(2, 0); 
g.addEdge(3, 1); 
g.addEdge(4, 1); 
g.addEdge(4, 2); 
g.addEdge(4, 3); 
g.addEdge(5, 3); 
g.addEdge(5, 4);  

//g.print(); 

g.dfs(0);

console.log("*** DFS Iterative ***")

g.iterDFS(0); 

//console.log("*** BFS Recursion ***")
//g.bfsRec(0); 
