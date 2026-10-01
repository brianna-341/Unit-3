function lotterSlots(q, m1, m2, m3) {
  machine == [m1, m2, m3];
  totalplays = 0;
  let q = 0;
  while (q > 0)
    if (machine[1] === 0) {
      if (m1 % 35 === 0) {
        q--;
        q = q + 30;
        machine++;
        totalplays++;
        machine(1);
      } else q--;
      totalplays++;
    } else if (machine[2] === 0) {
      if (m2 % 100 === 0) {
        q--;
        q = q + 60;
        machine++;
        totalplays++;
        machine(2);
      } else q--;
      totalplays++;
    } else if (machine[3] === 0) {
      if (m3 % 10 === 0) {
        q--;
        q = q + 9;
        machine++;
        totalplays++;
        machine(0);
      } else q--;
      totalplays++;
    }
  return `Martha played ${totalplays}times`;
}
console.log(lotterSlots(48, 3, 10, 4));
/* 
{
  const totalplays = 0;
  let machine = [m1, m2, m3];
  q = 1000;
  while (q > 0) {
    machine[0] == 0;
    if (m1 % 35 === 0) {
      q--;
      q + 30;
      m1++;
      totalplays++;
      break;
    } else q--;
    totalplays++;
    machine[1];
    if (m2 % 100 === 0) {
      q--;
      q + 60;
      m2++;
      totalplays++;
      break;
    } else q--;
    totalplays++;
    machine[3];
    if (m3 % 10 === 0) {
      q--;
      q + 9;
      m3++;
      totalplays++;
      break;
    } else q--;
    totalplays++;
  }
  console.log(totalplays);
}
lotterSlots(48, 3, 10, 4);
 */
