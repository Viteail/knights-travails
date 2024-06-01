class Vertex {
  constructor(value) {
    this.value = value;
    this.edges = [];
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
    console.log(this.boardSize);

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
}

const chessGame = new KnightMoves();
console.log(chessGame.graph);

// init = 3, 3
// {init: [3,3], edges: [[5,4], [4, 5] ...]}
