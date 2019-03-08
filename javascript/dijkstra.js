class Node {
    constructor(id, distance) {
        this.id = id; 
        this.distance = distance; 
    }
}

class Heap {
    constructor() {
        this.nodes = []; 
        this.map = new Map(); 
    }
    insert( object ) {
        var position = this.nodes.length; 
        this.nodes.push(object); 
        this.map.set(object.id, position); 
        var parentPosition = Math.floor((position - 1) / 2); 
        if (parentPosition > 0) {
            this.percolate(parentPosition); 
        }
    }

    percolate(parent) {
        var min = this.nodes[parent];
        var minIndex = parent; 
        var leftChild = (parent * 2) + 1; 
        var rightChild = (parent * 2) + 2; 

        // searching for the max between the parent, leftchild, and right child
        if (leftChild < this.nodes.length && this.nodes[leftChild].distance < min.distance) {
            min = this.nodes[leftChild]; 
            minIndex = leftChild; 
        }
        if (rightChild < this.nodes.length && this.nodes[rightChild].distance < min.distance) {
            min = this.nodes[rightChild]; 
            minIndex = rightChild; 
        }

        // swap with min
        if (minIndex < this.nodes.length) {
            this.nodes[minIndex] = this.nodes[parent];
            this.map.set(this.nodes[parent].id, minIndex); 
            
            this.nodes[parent] = min; 
            this.map.set(min.id, parent); 

            var newParentPosition = Math.floor((parent - 1) / 2); 
            // console.log(newParentPosition)
            if (newParentPosition !== parent && newParentPosition >= 0) {
                this.percolate(newParentPosition); 
            }
        }
    }

    percolateDown(parent) {
        var min = this.nodes[parent];
        var minIndex = parent; 
        var leftChild = (parent * 2) + 1; 
        var rightChild = (parent * 2) + 2; 

        // searching for the max between the parent, leftchild, and right child
        if (rightChild < this.nodes.length && this.nodes[rightChild].distance < min.distance) {
            min = this.nodes[rightChild]; 
            minIndex = rightChild; 
        }
        if (leftChild < this.nodes.length && this.nodes[leftChild].distance < min.distance) {
            min = this.nodes[leftChild]; 
            minIndex = leftChild; 
        }
        
        
        if (minIndex < this.nodes.length && minIndex != parent) {

            // swap with min
            this.nodes[minIndex] = this.nodes[parent];
            this.map.set(this.nodes[parent].id, minIndex); 
            
            this.nodes[parent] = min; 
            this.map.set(min.id, parent);

            this.percolateDown(minIndex); 
        }
    }

    getMin() {
        var min = this.nodes[0]; 
        this.map.set(min.id, undefined); 
        var lastNode = this.nodes.pop(); 
        this.map.set(lastNode.id, 0); 
        
        if (this.nodes.length > 0 ) {
            this.nodes[0] = lastNode; 
            //this.print()
            this.percolateDown(0); 
        }

        return min; 
    }

    update(nodeId, dis) {
        var currentNodeIndex = this.map.get(nodeId); 

        if (currentNodeIndex !== undefined && currentNodeIndex < this.nodes.length) {
            var currentNode = this.nodes[currentNodeIndex]; 
            currentNode.distance = dis;
            
            this.percolateDown(currentNodeIndex); 
            this.percolate(currentNodeIndex); 
        }
    }

    print() {
        console.log(this.nodes); 
        console.log(this.map); 
    }
}

class Graph {
    constructor(vertices) {
        this.vertices = vertices; 
        this.adList = new Array(vertices);
        this.weights = new Array(vertices); 
        for (var i = 0; i < vertices; i++) {
            this.adList[i] = []; 
            this.weights[i] = new Array(vertices); 
            this.weights[i].fill(null); 
        }
    }

    addEdge(v, w, weight) {
        if (v < this.vertices && w < this.vertices) {
            this.adList[v].push(w); 
            this.weights[v][w] = weight; 
            this.weights[w][v] = weight; 
        }
        else {
            console.log("ERROR: vertices is out of bounds"); 
        }
    }

    dijkstra(start) {
 
        var priorityQueue = new Heap(); 
        var shortestPathMap = new Map(); 

        // make heap 
        for ( var i = 0; i < this.vertices; i++) {
            if (i === start) {
                priorityQueue.insert(new Node(i, 0)); 
            }
            else {
                priorityQueue.insert(new Node(i, Number.POSITIVE_INFINITY)); 
            }
        }

        while (priorityQueue.nodes.length > 0) {

            var minNode = priorityQueue.getMin(); 
            var minNodeDis = minNode.distance; 
            shortestPathMap.set(minNode.id, minNodeDis); 

            for(var i = 0; i < this.adList[minNode.id].length; i++) {

                var adjIndex = this.adList[minNode.id][i]; 
                if (!shortestPathMap.has(adjIndex)) {
                    var distanceToChild = this.weights[minNode.id][adjIndex]; 
                    distanceToChild += minNodeDis; 

                    if (distanceToChild < priorityQueue.nodes[priorityQueue.map.get(adjIndex)].distance) {
                        priorityQueue.update(adjIndex, distanceToChild); 
                    }
                    
                }

             
            }
        }

        return shortestPathMap; 
    }

       print() {
        console.log(this.adList); 
    }
}

var graph = new Graph(9); 

graph.addEdge(0, 1, 4); 
graph.addEdge(0, 7, 8); 
graph.addEdge(1, 0, 4);
graph.addEdge(1, 2, 8);
graph.addEdge(1, 7, 11)
graph.addEdge(2, 1, 8);
graph.addEdge(2, 3, 7);
graph.addEdge(2, 8, 2); 
graph.addEdge(2, 5, 4);
graph.addEdge(3, 2, 7);
graph.addEdge(3, 4, 9); 
graph.addEdge(3, 5, 14);
graph.addEdge(4, 3, 9);
graph.addEdge(4, 5, 10); 
graph.addEdge(5, 6, 2); 
graph.addEdge(5, 2, 4); 
graph.addEdge(5, 3, 14); 
graph.addEdge(5, 4, 10); 
graph.addEdge(6, 5, 2);
graph.addEdge(6, 7, 1); 
graph.addEdge(6, 8, 6); 
graph.addEdge(7, 0, 8);
graph.addEdge(7, 1, 11);
graph.addEdge(7, 8, 7);
graph.addEdge(7, 6, 1);
graph.addEdge(8, 2, 2);
graph.addEdge(8, 6, 6);
graph.addEdge(8, 7, 7);

var shortestPaths = graph.dijkstra(0); 
console.log(shortestPaths); 
