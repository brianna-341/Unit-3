function lotterSlots(q, m1, m2, m3) {
  const totalplays = 0;
  while (q > 0) {
    if (m1 % 35 === 0) {
      q--;
      q + 30;
      m1++;
      totalplays++;
    } else q--;
    totalplays++;
    if (m2 % 100 === 0) {
      q--;
      q + 60;
      m2++;
      totalplays++;
    } else q--;
    totalplays++;
    if (m3 % 10 === 0) {
      q--;
      q + 9;
      m3++;
      totalplays++;
    } else q--;
    totalplays++;
  }
  console.log(totalplays);
}
lotterSlots(48, 3, 10, 4);
