class KnightMoves {
  constructor() {
    this.moves = [];
    this.boardCoords = [];
  }

  isValidCord(coords) {
    if (coords[0] > 7 || coords[0] < 0 || coords[1] > 7 || coords[1] < 0)
      return false;
    else return true;
  }

  findShortestPath(move, finalCoords, minMoveCount) {
    if (!this.isValidCord(move)) return;
    if (move === finalCoords) return minMoveCount;

    let moveCount;

    moveCount = this.findShortestPath(
      [move[0] + 2, move[1] + 1],
      finalCoords,
      minMoveCount + 1,
    );

    moveCount = this.findShortestPath(
      [move[0] + 1, move[1] + 2],
      finalCoords,
      minMoveCount + 1,
    );

    moveCount = this.findShortestPath(
      [move[0] + 2, move[1] - 1],
      finalCoords,
      minMoveCount + 1,
    );

    moveCount = this.findShortestPath(
      [move[0] + 1, move[1] - 1],
      finalCoords,
      minMoveCount + 1,
    );

    moveCount = this.findShortestPath(
      [move[0] - 2, move[1] - 1],
      finalCoords,
      minMoveCount + 1,
    );

    moveCount = this.findShortestPath(
      [move[0] - 1, move[1] - 2],
      finalCoords,
      minMoveCount + 1,
    );

    moveCount = this.findShortestPath(
      [move[0] - 2, move[1] + 1],
      finalCoords,
      minMoveCount + 1,
    );

    moveCount = this.findShortestPath(
      [move[0] - 1, move[1] + 2],
      finalCoords,
      minMoveCount + 1,
    );
  }

  knightMoves(initCoords, finalCoords) {
    this.findShortestPath(initCoords, finalCoords, 1);
  }
}

// init = 3, 3
// {init: [3,3], edges: [[5,4], [4, 5] ...]}
