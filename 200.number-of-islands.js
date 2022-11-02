/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  if (!grid || !grid[0]) {
    return 0
  }
  const islands = 0
  //   const visited = []
  const rows = grid.length
  const columns = grid[0].length

  function dfs (r, c, visited = []) {
    if (r >= rows || c >= columns || grid[r][c] === '0' || visited.includes(r, c)) {
      return
    }

    visited.push(r, c)
    console.log(visited)
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for (const dx of directions) {
      dfs(r + dx[0], c + dx[1])
    }
  }

  dfs(0, 0)

  //   for (let r of range(rows)) {
  //   	for (let c of range(cols)){
  //   		if grid[r][c] == "1" && (r, c) not in visit{
  //   			islands += 1
  //   			dfs(r, c)
  //   		}
  //   	}
  //   }
  return islands
}
console.log(numIslands([['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]))
