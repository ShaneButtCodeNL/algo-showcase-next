export default function bubbleSortAlgo(list: Array<number>) {
  let compares = 0;
  let swaps = 0;
  let sorted = 0;
  let res = [];
  list = [...list];

  for (let i = 0; i < list.length; i++) {
    let p1 = 0;
    let p2 = 1;
    let hasSwapped = false;
    res.push({ p1, p2, swaps, compares, sorted, list: [...list] });
    for (let j = 1; j < list.length - sorted; j++) {
      compares++;
      if (list[p1] > list[p2]) {
        swaps++;
        hasSwapped = true;
        [list[p1], list[p2]] = [list[p2], list[p1]];
      }
      res.push({ p1, p2, swaps, compares, sorted, list: [...list] });
      p1++;
      p2++;
    }
    if (!hasSwapped) {
      res.push({
        p1,
        p2,
        swaps,
        compares,
        sorted: list.length,
        list: [...list],
      });
      return res;
    }
    sorted++;
    res.push({ p1, p2, swaps, compares, sorted, list: [...list] });
  }
  return res;
}
