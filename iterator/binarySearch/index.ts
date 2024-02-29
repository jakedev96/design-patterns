interface ISearch {
  binarySearch(arr: number[], target: number): number;
}

export class Search implements ISearch {
  binarySearch(arr: number[], target: number): number {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      const mid = Math.round((start + end) / 2);

      if (arr[mid] === target) {
        return mid;
      }

      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return -1;
  }
}
