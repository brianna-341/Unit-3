function elder(n, start, duels) {
  let owner = start;
  let times = 1;

  for (let i = 0; i < n; i++) {
    if (duels[i][1] === owner) {
      owner = duels[i][0];
      times++;
    }
  }
  console.log(owner, times);
}
//elder(3, "A", ["BA", "CB", "DA"]);
elder(5, "N", ["DA"]);
