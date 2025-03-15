class Sorter {
  constructor(public collection: number[]) {
    console.log(this.bubbleSort(collection));
  }

  bubbleSort = (arr: number[]) => {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length-i -1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp: number = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
      }
    }
    return arr;
  };
}

console.log(new Sorter([-2, 5, 10, -3, 19,0]));
