
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

    bfs(start) {
        var visited = new Array(this.vertices); 
        visited.fill(false); 
        var queue = [start]; 

        while (queue.length > 0) {
            var currentVertex = queue.pop(); 
            if (!visited[currentVertex]) {
                visited[currentVertex] = true; 

                console.log(`${currentVertex} `); 

                for (var i = 0; i < this.adList[currentVertex].length; i++) {
                    var adjVertex = this.adList[currentVertex][i]; 
                    if (!visited[adjVertex]) {
                        queue.unshift(adjVertex); 
                    }
                }
            }
        }
    }

    bfsRec(start) {
        var visited = new Array(this.vertices); 
        visited.fill(false);  
        var adList = this.adList;
        var queue = [start];  

        function recurse () {
            

            if (queue.length == 0) {
                return; 
            }

            var currentVertex = queue.pop(); 
            if (!visited[currentVertex]) {
                visited[currentVertex] = true; 

                console.log(`${currentVertex} `); 

                for (var i = 0; i < adList[currentVertex].length; i++) {
                    var adjVertex = adList[currentVertex][i]; 
                    if (!visited[adjVertex]) {
                        queue.unshift(adjVertex); 
                    }
                }
            }
           
            recurse(); 
        }

        recurse(start); 
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

// g.bfs(2); 

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

g.print(); 

g.bfs(0); 
console.log("*** BFS Recursion ***")
g.bfsRec(0); 

