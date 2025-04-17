export default function bubbleSortAlgo(list: Array<number>) {
  let compares = 0;
  let swaps = 0;
  let sorted = 0;
  let res = [];
  let orderedList = list.map((v, i) => [v, i]);
  console.log("TEST\n" + orderedList);
  for (let i = 1; i < orderedList.length; i++) {
    let p1 = 0;
    let p2 = 1;
    let hasSwapped = false;
    res.push({ p1, p2, swaps, compares, sorted, list: [...orderedList] });
    for (let j = 1; j < orderedList.length - sorted; j++) {
      compares++;
      res.push({ p1, p2, swaps, compares, sorted, list: [...orderedList] });
      if (orderedList[p1][0] > orderedList[p2][0]) {
        swaps++;
        hasSwapped = true;
        [orderedList[p1], orderedList[p2]] = [orderedList[p2], orderedList[p1]];
      }
      res.push({ p1, p2, swaps, compares, sorted, list: [...orderedList] });
      p1++;
      p2++;
    }
    if (!hasSwapped) {
      res.push({
        p1,
        p2,
        swaps,
        compares,
        sorted: orderedList.length,
        list: [...orderedList],
      });
      return res;
    }
    sorted++;
    res.push({
      p1: p1 - 1,
      p2: p2 - 1,
      swaps,
      compares,
      sorted,
      list: [...orderedList],
    });
  }
  res.push({ p1: -1, p2: -1, swaps, compares, sorted, list: [...orderedList] });

  return res;
}
