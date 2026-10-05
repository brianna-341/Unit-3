function elder(n, start, duels) {
  let owner = start;
  let times = 1;
  console.log(duels[0][0]);
  for (let i = 0; i < n; i++)
    if (duels[0][1] === owner) {
      owner[i + 1];
      times++;
    }
}

elder(3, "A", ["BA", "CB", "DA"]);
