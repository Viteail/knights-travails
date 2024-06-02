class Vertex {
  constructor(value) {
    this.value = value;
    this.edges = [];
    this.dist = Infinity;
    this.moves = [];
  }
}

class KnightMoves {
  constructor() {
    this.directions = [
      [2, 1],
      [1, 2],
      [2, -1],
      [1, -2],
      [-2, -1],
      [-1, -2],
      [-2, 1],
      [-1, 2],
    ];
    this.boardSize = 8;
    this.graph = this.createGraph();
  }

  isValidCord(coords) {
    if (coords[0] > 7 || coords[0] < 0 || coords[1] > 7 || coords[1] < 0)
      return false;
    else return true;
  }

  createGraph() {
    const graph = [];

    for (let y = 0; y < this.boardSize; y++) {
      for (let x = 0; x < this.boardSize; x++) {
        let vertex = new Vertex([y, x]);
        graph.push(vertex);

        for (const [dy, dx] of this.directions) {
          let newY = y + dy;
          let newX = x + dx;

          if (this.isValidCord([newY, newX])) vertex.edges.push([newY, newX]);
        }
      }
    }
    return graph;
  }

  getVertex(graph, v) {
    for (let i = 0; i < graph.length; i++) {
      if (v[0] === graph[i].value[0] && v[1] === graph[i].value[1])
        return graph[i];
    }
  }

  findShortestPath(source, target, graph) {
    let queue = [source];
    source.dist = 0;
    source.moves.push(source.value);

    while (queue.length > 0) {
      let vertex = queue[0];
      if (vertex[0] !== undefined) vertex = this.getVertex(graph, vertex);

      for (let i = 0; i < vertex.edges.length; i++) {
        let edge = this.getVertex(graph, vertex.edges[i]);

        if (edge.dist === Infinity) {
          queue.push(edge);
          edge.dist = vertex.dist + 1;
          edge.moves = [...vertex.moves];
          edge.moves.push(edge.value);
        }
      }
      queue.shift();
    }

    return target.moves;
  }

  knightMoves(start, finish) {
    let graph = this.graph;

    return this.findShortestPath(
      this.getVertex(graph, start),
      this.getVertex(graph, finish),
      graph,
    );
  }
}

const chessGame = new KnightMoves();
console.log(chessGame.knightMoves([0, 0], [3, 3]));
