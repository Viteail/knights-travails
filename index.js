class KnightMoves {
  constructor() {
    this.boardCoords = [];
  }

  isValidCord(coords) {
    if (coords[0] > 7 || coords[0] < 0 || coords[1] > 7 || coords[1] < 0)
      return false;
    else return true;
  }

  minValue(a, b) {
    if (!a) return b;
    if (!b) return a;
    else return Math.min(a, b);
  }

  isInBoardCoords = (move) => {
    this.boardCoords.forEach((coords) => {
      if (coords === move) return true;
    });
    return false;
  };

  findShortestPath(move, finalCoords, moveCount) {
    if (!this.isValidCord(move) || this.isInBoardCoords(move)) return null;

    this.boardCoords.push(move);

    if (move === finalCoords) return moveCount;

    let maxMoveCount;
    let minMoveCount = null;

    maxMoveCount = this.findShortestPath(
      [move[0] + 2, move[1] + 1],
      finalCoords,
      moveCount + 1,
    );
    minMoveCount = this.minValue(minMoveCount, maxMoveCount);

    maxMoveCount = this.findShortestPath(
      [move[0] + 1, move[1] + 2],
      finalCoords,
      moveCount + 1,
    );
    minMoveCount = this.minValue(minMoveCount, maxMoveCount);

    maxMoveCount = this.findShortestPath(
      [move[0] + 2, move[1] - 1],
      finalCoords,
      moveCount + 1,
    );
    minMoveCount = this.minValue(minMoveCount, maxMoveCount);

    maxMoveCount = this.findShortestPath(
      [move[0] + 1, move[1] - 1],
      finalCoords,
      moveCount + 1,
    );
    minMoveCount = this.minValue(minMoveCount, maxMoveCount);

    maxMoveCount = this.findShortestPath(
      [move[0] - 2, move[1] - 1],
      finalCoords,
      moveCount + 1,
    );
    minMoveCount = this.minValue(minMoveCount, maxMoveCount);

    maxMoveCount = this.findShortestPath(
      [move[0] - 1, move[1] - 2],
      finalCoords,
      moveCount + 1,
    );
    minMoveCount = this.minValue(minMoveCount, maxMoveCount);

    maxMoveCount = this.findShortestPath(
      [move[0] - 2, move[1] + 1],
      finalCoords,
      moveCount + 1,
    );
    minMoveCount = this.minValue(minMoveCount, maxMoveCount);

    maxMoveCount = this.findShortestPath(
      [move[0] - 1, move[1] + 2],
      finalCoords,
      moveCount + 1,
    );
    minMoveCount = this.minValue(minMoveCount, maxMoveCount);

    return minMoveCount;
  }

  knightMoves(initCoords, finalCoords) {
    this.findShortestPath(initCoords, finalCoords, 1);
  }
}

// const knightMoves = new KnightMoves();

// init = 3, 3
// {init: [3,3], edges: [[5,4], [4, 5] ...]}
