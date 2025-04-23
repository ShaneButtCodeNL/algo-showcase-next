export default function bubbleSortAlgo(inputList: Array<number>) {
  let compares = 0;
  let swaps = 0;
  let sortCount = inputList.length;
  let sorted = new Set([sortCount]);
  let res = [];
  let list = inputList.map((v) => v);
  let orders = Array.from({ length: list.length }, (_, i) => i);
  for (let i = 1; i < list.length; i++) {
    let p1 = 0;
    let p2 = 1;
    let hasSwapped = false;
    res.push({
      p1,
      p2,
      swaps,
      compares,
      sorted: [...sorted],
      list: [...list],
      orders: [...orders],
    });
    for (let j = 1; j < sortCount; j++) {
      compares++;
      res.push({
        p1,
        p2,
        swaps,
        compares,
        sorted: [...sorted],
        list: [...list],
        orders: [...orders],
      });
      if (list[p1] > list[p2]) {
        swaps++;
        hasSwapped = true;
        [list[p1], list[p2]] = [list[p2], list[p1]];
        [orders[p1], orders[p2]] = [orders[p2], orders[p1]];
      }
      res.push({
        p1,
        p2,
        swaps,
        compares,
        sorted: [...sorted],
        list: [...list],
        orders: [...orders],
      });
      p1++;
      p2++;
    }
    if (!hasSwapped) {
      while (--sortCount >= 0) sorted.add(sortCount);
      res.push({
        p1,
        p2,
        swaps,
        compares,
        sorted: [...sorted],
        list: [...list],
        orders: [...orders],
      });
      return res;
    }
    sortCount--;
    sorted.add(sortCount);
    res.push({
      p1: p1 - 1,
      p2: p2 - 1,
      swaps,
      compares,
      sorted: [...sorted],
      list: [...list],
      orders: [...orders],
    });
  }
  sorted.add(0);
  res.push({
    p1: -1,
    p2: -1,
    swaps,
    compares,
    sorted: [...sorted],
    list: [...list],
    orders: [...orders],
  });

  return res;
}
